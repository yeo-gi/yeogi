package com.yeogi.yeogi.trip.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "trip")
@Builder
@DynamicInsert
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trip_id")
    private Long tripId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "trip", cascade = CascadeType.ALL)
    private List<TripLocation> tripLocations;

    @OneToMany(mappedBy = "trip", cascade = CascadeType.ALL)
    private List<TripParticipants> tripParticipants;

    @Column(name = "trip_name", nullable = false)
    private String tripName;

    @Column(name = "start_date", nullable = false)
    private LocalDateTime startDate;

    @Column(name = "end_date", nullable = false)
    private LocalDateTime endDate;

    @Column(name = "trip_description")
    private String tripDescription;

    public void update(
            String tripName, LocalDateTime startDate, LocalDateTime endDate, String tripDescription
    ) {
        this.tripName = tripName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.tripDescription = tripDescription;
    }
}
