package com.yeogi.yeogi.trip.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Table(name = "trip")
public class Trip {

    @Id @GeneratedValue
    @Column(name = "trip_id")
    private Long tripId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User userId;

    @OneToMany(mappedBy = "tripId", cascade = CascadeType.ALL)
    private List<TripLocation> tripLocations = new ArrayList<>();

    @OneToMany(mappedBy = "tripId", cascade = CascadeType.ALL)
    private List<TripParticipants> tripParticipants;

    @Column(name = "trip_name", nullable = false)
    private String tripName;

    @Column(name = "start_date", nullable = false)
    private LocalDateTime startDate;

    @Column(name = "end_date", nullable = false)
    private LocalDateTime endDate;

    @Column(name = "trip_description")
    private String tripDescription;

    @Column(name = "total_expenditure", nullable = false)
    private double totalExpenditure;

    public Trip(
            Long userId, List<TripParticipants> tripParticipants, List<TripLocation> tripLocations,
            String tripName, LocalDateTime startDate, LocalDateTime endDate, String tripDescription, double totalExpenditure
    ) {
        this.userId = new User(userId);
        this.tripParticipants = tripParticipants;
        this.tripLocations = tripLocations;
        this.tripName = tripName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.tripDescription = tripDescription;
        this.totalExpenditure = totalExpenditure;
    }
}
