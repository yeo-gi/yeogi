package com.yeogi.yeogi.trip.service;

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
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TripService {

    private final TripRepository tripRepository;

    @Transactional
    public Long createTrip(Trip trip) {
        tripRepository.save(trip);
        return trip.getTripId();
    }

    @Transactional
    public void deleteTrip(Long userId, Long tripId) {
        Trip trip = tripRepository.findOne(tripId);
        if (userId == trip.getUserId().getUserId()) {

        }
    }

    public Trip findOne(Long tripId) {
        return tripRepository.findOne(tripId);
    }

}
