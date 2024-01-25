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
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TripServiceImpl implements TripService {

    private final TripRepository tripRepository;
    private final UserRepository userRepository;
    private final LocationRepository locationRepository;
    private final ParticipantsRepository participantsRepository;

    @Override
    public TripResponseDto getTrip(Long tripId) {
        try {
            Trip optionalTrip = tripRepository.findByTripId(tripId);
            TripResponseDto result = new TripResponseDto(optionalTrip);
            return result;
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
                for (int i = 0; i < savedLocations.size(); i++) {
                    TripLocation savedLocation = savedLocations.get(i).toTripLocation();
                    savedLocation.setTrip(savedTrip);
                    locationRepository.save(savedLocation);
                }
            }

            // 여행 참가자 테이블 저장
            if (!tripDto.getTripParticipants().isEmpty()) {
                List<ParticipantsRegisterDto> savedParticipants = tripDto.getTripParticipants();
                for (int i = 0; i < savedParticipants.size(); i++) {
                    TripParticipants savedParticipant = savedParticipants.get(i).toTripParticipants();
                    savedParticipant.setTrip(savedTrip);
                    savedParticipant.setUser(savedParticipant.getUser());
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
        try {
//            List<TripLocation> tripLocations = tripDto.getTripLocations();
//            List<TripParticipants> tripParticipants = tripDto.getTripParticipants();
            String tripName = tripDto.getTripName();
            LocalDateTime startDate = tripDto.getStartDate();
            LocalDateTime endDate = tripDto.getEndDate();
            String tripDescription = tripDto.getTripDescription();

            Trip needUpdateTrip = tripRepository.findByTripId(tripId);
//            needUpdateTrip.update(tripLocations, tripParticipants, tripName, startDate, endDate, tripDescription);
            return tripId;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    @Transactional
    public boolean deleteTrip(Long tripId) {
        try {
            tripRepository.deleteById(tripId);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
