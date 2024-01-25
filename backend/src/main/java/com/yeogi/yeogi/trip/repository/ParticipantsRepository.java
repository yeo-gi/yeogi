package com.yeogi.yeogi.trip.repository;

import com.yeogi.yeogi.trip.entity.TripParticipants;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantsRepository extends JpaRepository<TripParticipants, Long> {
}
