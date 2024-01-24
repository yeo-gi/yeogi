package com.yeogi.yeogi.trip.repository;

import com.yeogi.yeogi.trip.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TripRepository extends JpaRepository<Trip, Long> {

    Trip findByTripId(Long tripId);
}
