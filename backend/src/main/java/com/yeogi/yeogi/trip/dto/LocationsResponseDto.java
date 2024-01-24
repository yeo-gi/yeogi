package com.yeogi.yeogi.trip.dto;

import com.yeogi.yeogi.trip.entity.TripLocation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LocationsResponseDto {

    private Long locationId;
    private Long tripId;
    private String locationName;
    private double locationX;
    private double locationY;

    private LocationsResponseDto(
            Long locationId, Long tripId, String locationName, double locationX, double locationY
    ) {
        this.locationId = locationId;
        this.tripId = tripId;
        this.locationName = locationName;
        this.locationX = locationX;
        this.locationY = locationY;
    }

    public static LocationsResponseDto of(TripLocation tripLocation) {
        return new LocationsResponseDto(
                tripLocation.getLocationId(), tripLocation.getTrip().getTripId(), tripLocation.getLocationName(), tripLocation.getLocationX(), tripLocation.getLocationY()
        );
    }
}
