package com.yeogi.yeogi.trip.repository;

import com.yeogi.yeogi.trip.entity.TripParticipants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ParticipantsRepository extends JpaRepository<TripParticipants, Long> {

    @Modifying
    @Query(value = "DELETE FROM TripParticipants p WHERE p.participantId = :participantId", nativeQuery = true)
    void deleteById(@Param("participantId") Long participantId);

    @Query("DELETE FROM TripParticipants p WHERE p.trip.tripId = :tripId")
    void deleteByTripId(@Param("tripId") Long tripId);
}
