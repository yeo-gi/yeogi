package com.yeogi.yeogi.trip.service;

import com.yeogi.yeogi.trip.dto.LocationRegisterDto;
import com.yeogi.yeogi.trip.dto.ParticipantsRegisterDto;
import com.yeogi.yeogi.trip.dto.TripRegisterDto;
import com.yeogi.yeogi.trip.dto.TripResponseDto;
import com.yeogi.yeogi.trip.entity.Trip;
import com.yeogi.yeogi.trip.entity.TripLocation;
import com.yeogi.yeogi.trip.entity.TripParticipants;
import com.yeogi.yeogi.trip.entity.User;
import com.yeogi.yeogi.trip.repository.LocationRepository;
import com.yeogi.yeogi.trip.repository.ParticipantsRepository;
import com.yeogi.yeogi.trip.repository.TripRepository;
import com.yeogi.yeogi.trip.repository.UserRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class TripServiceImpl implements TripService {

    private final TripRepository tripRepository;
    private final UserRepository userRepository;
    private final LocationRepository locationRepository;
    private final ParticipantsRepository participantsRepository;

    private final EntityManager entityManager;

    @Override
    public TripResponseDto getTrip(Long tripId) {
        try {
            Trip optionalTrip = tripRepository.findByTripId(tripId);
            return new TripResponseDto(optionalTrip);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Long createTrip(TripRegisterDto tripDto) {
        try {
            User user = userRepository.findById(tripDto.getUserId())
                    .orElseThrow(() -> new IllegalArgumentException("해당 유저가 존재하지 않습니다."));

            // 여행 테이블 저장
            Trip savedTrip = tripDto.toTrip();
            savedTrip.setUser(user);
            tripRepository.save(savedTrip);

            // 여행 장소 테이블 저장
            if (!tripDto.getTripLocations().isEmpty()) {
                List<LocationRegisterDto> savedLocations = tripDto.getTripLocations();
                for (LocationRegisterDto location : savedLocations) {
                    TripLocation savedLocation = location.toTripLocation();
                    savedLocation.setTrip(savedTrip);
                    locationRepository.save(savedLocation);
                }
            }

            // 여행 참가자 테이블 저장
            if (!tripDto.getTripParticipants().isEmpty()) {
                List<ParticipantsRegisterDto> savedParticipants = tripDto.getTripParticipants();
                for (ParticipantsRegisterDto participant : savedParticipants) {
                    TripParticipants savedParticipant = participant.toTripParticipants();
                    savedParticipant.setTrip(savedTrip);
                    savedParticipant.setUser(participant.getUser().toUser());
                    participantsRepository.save(savedParticipant);
                }
            }
            return savedTrip.getTripId();
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    @Transactional
    public Long updateTrip(Long tripId, TripRegisterDto tripDto) {
        deleteTripLocations(tripId);

        Trip needUpdateTrip = tripRepository.findByTripId(tripId);

        log.info("dasdsadsadv {}", needUpdateTrip.getTripLocations().size());

        needUpdateTrip.update(tripDto.getTripName(), tripDto.getStartDate(), tripDto.getEndDate(), tripDto.getTripDescription());

        addNewTripLocations(tripDto.getTripLocations(), needUpdateTrip);

        updateTripParticipants(tripDto.getTripParticipants(), needUpdateTrip);
        tripRepository.save(needUpdateTrip);

        return tripId;
    }

    @Transactional
    public void deleteTripLocations(Long tripId) {
        Trip needUpdateTrip = tripRepository.findByTripId(tripId);
        List<TripLocation> tripLocations = needUpdateTrip.getTripLocations();

        locationRepository.deleteAllByTripTripId(tripId);

        entityManager.flush();
        entityManager.clear();

    }

    private void addNewTripLocations(List<LocationRegisterDto> locations, Trip trip) {
        if (!locations.isEmpty()) {
            for (LocationRegisterDto location : locations) {
                TripLocation updatedLocation = location.toTripLocation();
                updatedLocation.setTrip(trip);
                locationRepository.save(updatedLocation);
            }
        }
    }

    private void updateTripParticipants(List<ParticipantsRegisterDto> participants, Trip trip) {
        // 기존 참가자 삭제
        if (!trip.getTripParticipants().isEmpty()) {
            for (TripParticipants deleteParticipant : trip.getTripParticipants()) {
                participantsRepository.deleteById(deleteParticipant.getParticipantId());
            }
        }

        // 새로운 참가자 등록
        if (!participants.isEmpty()) {
            for (ParticipantsRegisterDto participant : participants) {
                TripParticipants updatedParticipant = participant.toTripParticipants();
                updatedParticipant.setTrip(trip);
                participantsRepository.save(updatedParticipant);
            }
        }
    }

    @Override
    @Transactional
    public boolean deleteTrip(Long tripId) {
        try {
            participantsRepository.deleteByTripId(tripId);
            locationRepository.deleteByTripTripId(tripId);
            tripRepository.deleteById(tripId);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}