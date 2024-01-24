package com.yeogi.yeogi.trip.repository;

import com.yeogi.yeogi.trip.entity.Trip;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class TripRepository {

    @PersistenceContext
    private EntityManager em;

    public void save(Trip trip) {
        if (trip.getTripId() == null) {
            em.persist(trip);  // 여행 등록
        } else {
            em.merge(trip);  // 여행 수정
        }
    }

    public Trip findOne(Long tripId) {
        return em.find(Trip.class, tripId);
    }
}
