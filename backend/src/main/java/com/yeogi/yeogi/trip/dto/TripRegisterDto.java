package com.yeogi.yeogi.trip.dto;

import com.yeogi.yeogi.trip.entity.Trip;
import com.yeogi.yeogi.trip.entity.TripLocation;
import com.yeogi.yeogi.trip.entity.TripParticipants;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@Builder
public class TripRegisterDto {

    private Long userId;
    private List<TripLocation> tripLocations;
    private List<TripParticipants> tripParticipants;
    private String tripName;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String tripDescription;

    public TripRegisterDto(Trip trip) {
        this.userId = trip.getUser().getUserId();
        this.tripLocations = trip.getTripLocations();
        this.tripParticipants = trip.getTripParticipants();
        this.tripName = trip.getTripName();
        this.startDate = trip.getStartDate();
        this.endDate = trip.getEndDate();
        this.tripDescription = trip.getTripDescription();
    }
}
