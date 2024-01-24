package com.yeogi.yeogi.trip.service;

import com.yeogi.yeogi.trip.dto.TripRegisterDto;
import com.yeogi.yeogi.trip.dto.TripResponseDto;
import com.yeogi.yeogi.trip.entity.Trip;
import com.yeogi.yeogi.trip.entity.TripLocation;
import com.yeogi.yeogi.trip.entity.TripParticipants;
import com.yeogi.yeogi.trip.repository.TripRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TripServiceImpl implements TripService {

    private final TripRepository tripRepository;

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
    public TripRegisterDto createTrip(TripRegisterDto tripDto) {
        try {
            Long userId = tripDto.getUserId();
            List<TripLocation> tripLocations = tripDto.getTripLocations();
            List<TripParticipants> tripParticipants = tripDto.getTripParticipants();
            String tripName = tripDto.getTripName();
            LocalDateTime startDate = tripDto.getStartDate();
            LocalDateTime endDate = tripDto.getEndDate();
            String tripDescription = tripDto.getTripDescription();

            Trip savedTrip = new Trip(userId, tripLocations, tripParticipants, tripName, startDate, endDate, tripDescription);
            tripRepository.save(savedTrip);
            return new TripRegisterDto(savedTrip);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    @Transactional
    public Long updateTrip(Long tripId, TripRegisterDto tripDto) {
        try {
            List<TripLocation> tripLocations = tripDto.getTripLocations();
            List<TripParticipants> tripParticipants = tripDto.getTripParticipants();
            String tripName = tripDto.getTripName();
            LocalDateTime startDate = tripDto.getStartDate();
            LocalDateTime endDate = tripDto.getEndDate();
            String tripDescription = tripDto.getTripDescription();

            Trip needUpdateTrip = tripRepository.findByTripId(tripId);
            needUpdateTrip.update(tripLocations, tripParticipants, tripName, startDate, endDate, tripDescription);
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
