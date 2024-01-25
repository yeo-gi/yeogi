package com.yeogi.yeogi.trip.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "trip_location")
@Builder
@DynamicInsert
public class TripLocation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "location_id")
    private Long locationId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "trip_id", nullable = false)
    private Trip trip;

    @Column(name = "location_name", nullable = false)
    private String locationName;

    @Column(name = "location_x", nullable = false)
    private double locationX;

    @Column(name = "location_y", nullable = false)
    private double locationY;

    public void update(
            String locationName, double locationX, double locationY
    ) {
        this.locationName = locationName;
        this.locationX = locationX;
        this.locationY = locationY;
    }
}
