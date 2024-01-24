package com.yeogi.yeogi.trip.service;

import com.yeogi.yeogi.trip.dto.TripRegisterDto;
import com.yeogi.yeogi.trip.dto.TripResponseDto;

public interface TripService {

    TripResponseDto getTrip(Long tripId);
    TripRegisterDto createTrip(TripRegisterDto tripDto);
    Long updateTrip(Long tripId, TripRegisterDto tripDto);
    boolean deleteTrip(Long tripId);
    // boolean isAuthorized(Long tripId, Long userId);
}
