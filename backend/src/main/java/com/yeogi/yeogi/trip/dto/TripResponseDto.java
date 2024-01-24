package com.yeogi.yeogi.trip.dto;

import com.yeogi.yeogi.trip.entity.Trip;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@Builder
public class TripResponseDto {

    private Long tripId;
    private Long userId;
    private List<LocationsResponseDto> tripLocations;
    private List<ParticipantsResponseDto> tripParticipants;
    private String tripName;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String tripDescription;

    public TripResponseDto(Trip trip) {
        this.tripId = trip.getTripId();
        this.userId = trip.getUser().getUserId();
        this.tripLocations = trip.getTripLocations()
                .stream()
                .map(LocationsResponseDto::of)
                .collect(Collectors.toList());
        this.tripParticipants = trip.getTripParticipants()
                .stream()
                .map(ParticipantsResponseDto::of)
                .collect(Collectors.toList());
        this.tripName = trip.getTripName();
        this.startDate = trip.getStartDate();
        this.endDate = trip.getEndDate();
        this.tripDescription = trip.getTripDescription();
    }
}
