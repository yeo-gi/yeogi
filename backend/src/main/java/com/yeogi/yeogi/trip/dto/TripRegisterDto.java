package com.yeogi.yeogi.trip.dto;

import com.yeogi.yeogi.trip.entity.Trip;
import com.yeogi.yeogi.trip.entity.TripLocation;
import com.yeogi.yeogi.trip.entity.TripParticipants;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TripRegisterDto {

    private Long userId;
    private List<LocationRegisterDto> tripLocations;
    private List<ParticipantsRegisterDto> tripParticipants;
    private String tripName;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String tripDescription;

    public Trip toTrip() {
        return Trip.builder()
                .tripName(this.tripName)
                .startDate(this.startDate)
                .endDate(this.endDate)
                .tripDescription(this.tripDescription)
                .build();
    }
}
