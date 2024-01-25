package com.yeogi.yeogi.trip.repository;

import com.yeogi.yeogi.trip.entity.TripLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface LocationRepository extends JpaRepository<TripLocation, Long> {

//    @Modifying
//    @Query(value = "DELETE FROM TripLocation l WHERE l.locationId = :locationId", nativeQuery = true)
//    void deleteById(@Param("locationId") Long locationId);
//    void deleteById(Long locationId);

    @Query("DELETE FROM TripLocation l WHERE l.trip.tripId = :tripId")
    void deleteByTripId(@Param("tripId") Long tripId);
}
