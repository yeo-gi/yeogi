package com.yeogi.yeogi.trip.repository;

import com.yeogi.yeogi.trip.entity.TripLocation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<TripLocation, Long> {

    void deleteAllByTripTripId(Long tripId);
    void deleteByTripTripId(Long tripId);
}
