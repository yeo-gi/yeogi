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
    public Long updateTrip(Long tripId, TripRegisterDto tripDto) {
        try {
            Trip needUpdateTrip = tripRepository.findByTripId(tripId);

            // 여행 테이블 수정
            needUpdateTrip.update(tripDto.getTripName(), tripDto.getStartDate(), tripDto.getEndDate(), tripDto.getTripDescription());
            tripRepository.save(needUpdateTrip);

            // 여행 장소 테이블 수정 (삭제 후 등록)
            // 삭제
            System.out.println(!needUpdateTrip.getTripLocations().isEmpty() + "비었냐안비었냐!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            if (!needUpdateTrip.getTripLocations().isEmpty()) {
                List<TripLocation> deleteLocations = needUpdateTrip.getTripLocations();
                locationRepository.deleteAll(deleteLocations);
                for (TripLocation location : deleteLocations) {
                    try {
                        log.info("위치 삭제");
                        locationRepository.delete(location);
                    } catch (Exception e) {
                        System.out.println(e.getMessage());
                    }
                }
            }
            // 등록
            if (!tripDto.getTripLocations().isEmpty()) {
                List<LocationRegisterDto> updatedLocations = tripDto.getTripLocations();
                System.out.println(updatedLocations.size() + "몇개냐!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                for (LocationRegisterDto location : updatedLocations) {
                    TripLocation updatedLocation = location.toTripLocation();
                    updatedLocation.setTrip(needUpdateTrip);
                    locationRepository.save(updatedLocation);
                }
            }

            // 여행 참가자 테이블 저장 (대조 후............... 삭제 및 등록)
            //삭제
            if (!needUpdateTrip.getTripParticipants().isEmpty()) {
                List<TripParticipants> deleteParticipants = needUpdateTrip.getTripParticipants();
                for (TripParticipants deleteParticipant : deleteParticipants) {
                    participantsRepository.deleteById(deleteParticipant.getParticipantId());
                }
            }
            // 등록
            if (!tripDto.getTripParticipants().isEmpty()) {
                List<ParticipantsRegisterDto> updatedParticipants = tripDto.getTripParticipants();
                for (ParticipantsRegisterDto participant : updatedParticipants) {
                    TripParticipants updatedParticipant = participant.toTripParticipants();
                    updatedParticipant.setUser(participant.getUser().toUser());
                    participantsRepository.save(updatedParticipant);
                }
            }
            return tripId;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    @Transactional
    public boolean deleteTrip(Long tripId) {
        try {
            participantsRepository.deleteByTripId(tripId);
            locationRepository.deleteByTripId(tripId);
            tripRepository.deleteById(tripId);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
