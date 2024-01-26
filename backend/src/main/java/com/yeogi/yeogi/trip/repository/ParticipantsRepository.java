package com.yeogi.yeogi.trip.repository;

import com.yeogi.yeogi.trip.entity.TripParticipants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ParticipantsRepository extends JpaRepository<TripParticipants, Long> {

    void deleteAllByTripTripId(Long tripId);
    void deleteByTripTripId(Long tripId);
}
