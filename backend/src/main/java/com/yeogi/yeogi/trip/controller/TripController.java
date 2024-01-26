package com.yeogi.yeogi.trip.controller;

import com.yeogi.yeogi.trip.dto.ResponseDto;
import com.yeogi.yeogi.trip.dto.TripRegisterDto;
import com.yeogi.yeogi.trip.dto.TripResponseDto;
import com.yeogi.yeogi.trip.service.TripService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/trip")
public class TripController {

    private final TripService tripService;

    @GetMapping("/{tripId}")
    public ResponseEntity<?> getTrip(@PathVariable Long tripId) {
        TripResponseDto trip = tripService.getTrip(tripId);
        if (trip == null) {
            return new ResponseEntity<>("여행이 존재하지 않습니다.", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(trip, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> createTrip(@RequestBody TripRegisterDto trip) {
        ResponseDto responseDto = tripService.createTrip(trip);
        return new ResponseEntity<>(responseDto, responseDto.getStatusCode());
    }

    // 수정 삭제 권한 추가 필요
    @PutMapping("/{tripId}")
    public ResponseEntity<ResponseDto> updateTrip(@PathVariable Long tripId, @RequestBody TripRegisterDto trip) {
        ResponseDto responseDto = tripService.updateTrip(tripId, trip);
        return new ResponseEntity<>(responseDto, responseDto.getStatusCode());
    }

    @DeleteMapping("/{tripId}")
    public ResponseEntity<?> deleteTrip(@PathVariable Long tripId) {
        boolean isDeleted = tripService.deleteTrip(tripId);
        if (isDeleted) {
            return new ResponseEntity<>("여행이 삭제되었습니다.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }
}
