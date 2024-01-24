package com.yeogi.yeogi.trip.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Table(name = "trip_location")
public class TripLocation {

    @Id
    @GeneratedValue
    @Column(name = "location_id")
    private Long locationId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "trip_id", nullable = false)
    private Trip tripId;

    @Column(name = "location_x", nullable = false)
    private double locationX;

    @Column(name = "location_y", nullable = false)
    private double locationY;
}
