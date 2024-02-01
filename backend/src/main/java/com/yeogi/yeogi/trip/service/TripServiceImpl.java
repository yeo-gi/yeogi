package com.yeogi.yeogi.trip.service;

import com.yeogi.yeogi.trip.dto.*;
import com.yeogi.yeogi.trip.entity.Trip;
import com.yeogi.yeogi.trip.entity.TripLocation;
import com.yeogi.yeogi.trip.entity.TripParticipants;
import com.yeogi.yeogi.user.entity.User;
import com.yeogi.yeogi.trip.repository.LocationRepository;
import com.yeogi.yeogi.trip.repository.ParticipantsRepository;
import com.yeogi.yeogi.trip.repository.TripRepository;
import com.yeogi.yeogi.user.repository.UserRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

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
        Optional<Trip> trip = tripRepository.findByTripId(tripId);
        return trip.map(TripResponseDto::new).orElse(null);
    }

    @Override
    public ResponseDto createTrip(TripRegisterDto tripDto) {
        try {
            Optional<User> user = userRepository.findById(tripDto.getUserId());
            if (user.isEmpty()) {
                return new ResponseDto(HttpStatus.CONFLICT, "존재하지 않는 사용자입니다.");
            }

            // 여행 테이블 저장
            Trip savedTrip = tripDto.toTrip();
            savedTrip.setUser(user.get());
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
            return new ResponseDto(HttpStatus.OK, "새로운 여행이 생성되었습니다.");
        } catch (Exception e) {
            return new ResponseDto(HttpStatus.BAD_REQUEST, "여행을 생성할 수 없습니다.");
        }
    }

    @Override
    @Transactional
    public ResponseDto updateTrip(Long tripId, TripRegisterDto tripDto) {
        Optional<User> user = userRepository.findById(tripDto.getUserId());
        if (user.isEmpty()) {
            return new ResponseDto(HttpStatus.CONFLICT, "존재하지 않는 사용자입니다.");
        }

        Optional<Trip> needUpdateTrip = tripRepository.findByTripId(tripId);

        if (needUpdateTrip.isPresent()) {
            if (!needUpdateTrip.get().getTripLocations().isEmpty()) {
                deleteTripLocations(tripId);
            }

            if (!needUpdateTrip.get().getTripParticipants().isEmpty()) {
                deleteTripParticipants(tripId);
            }

            needUpdateTrip.get().update(tripDto.getTripName(), tripDto.getStartDate(), tripDto.getEndDate(), tripDto.getTripDescription());

            addNewTripLocations(tripDto.getTripLocations(), needUpdateTrip.get());
            addNewTripParticipants(tripDto.getTripParticipants(), needUpdateTrip.get());

            tripRepository.save(needUpdateTrip.get());

            return new ResponseDto(HttpStatus.OK, "Success");
        } else {
            return new ResponseDto(HttpStatus.NOT_FOUND, "여행이 존재하지 않습니다.");
        }

    }

    @Transactional
    public void deleteTripLocations(Long tripId) {
        locationRepository.deleteAllByTripTripId(tripId);

        entityManager.flush();
        entityManager.clear();
    }

    @Transactional
    public void addNewTripLocations(List<LocationRegisterDto> locations, Trip trip) {
        if (!locations.isEmpty()) {
            for (LocationRegisterDto location : locations) {
                TripLocation updatedLocation = location.toTripLocation();
                updatedLocation.setTrip(trip);
                locationRepository.save(updatedLocation);
            }
        }
    }

    @Transactional
    public void deleteTripParticipants(Long tripId) {
        participantsRepository.deleteAllByTripTripId(tripId);

        entityManager.flush();
        entityManager.clear();
    }

    @Transactional
    public void addNewTripParticipants(List<ParticipantsRegisterDto> participants, Trip trip) {
        if (!participants.isEmpty()) {
            log.info("참가자 추가");
            for (ParticipantsRegisterDto participant : participants) {
                TripParticipants updatedParticipant = participant.toTripParticipants();
                updatedParticipant.setTrip(trip);
                updatedParticipant.setUser(participant.getUser().toUser());
                participantsRepository.save(updatedParticipant);
            }
        }
    }

    @Override
    @Transactional
    public boolean deleteTrip(Long tripId) {
        try {
            participantsRepository.deleteByTripTripId(tripId);
            locationRepository.deleteByTripTripId(tripId);
            tripRepository.deleteById(tripId);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}