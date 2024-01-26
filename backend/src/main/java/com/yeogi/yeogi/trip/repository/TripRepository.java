package com.yeogi.yeogi.trip.repository;

import com.yeogi.yeogi.trip.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TripRepository extends JpaRepository<Trip, Long> {

    Optional<Trip> findByTripId(Long tripId);
}
