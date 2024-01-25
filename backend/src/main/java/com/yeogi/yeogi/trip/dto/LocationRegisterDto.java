package com.yeogi.yeogi.trip.dto;

import com.yeogi.yeogi.trip.entity.TripLocation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class LocationRegisterDto {

//    private Long tripId;
    private String locationName;
    private double locationX;
    private double locationY;

    public TripLocation toTripLocation() {
        return TripLocation.builder()
                .locationName(this.locationName)
                .locationX(this.locationX)
                .locationY(this.locationY)
                .build();
    }
}
