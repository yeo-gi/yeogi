package com.yeogi.yeogi.trip.controller;

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
        if (trip != null) {
            return new ResponseEntity<>(trip, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }

    @PostMapping
    public ResponseEntity<?> createTrip(@RequestBody TripRegisterDto trip) {
        Long createTrip = tripService.createTrip(trip);
        if (createTrip != null) {
            return new ResponseEntity<>("새로운 여행이 생성되었습니다.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }

    // 수정 삭제 권한 추가 필요
    @PutMapping("/{tripId}")
    public ResponseEntity<?> updateTrip(@PathVariable Long tripId, @RequestBody TripRegisterDto trip) {
        Long updatedTrip = tripService.updateTrip(tripId, trip);
        if (updatedTrip != null) {
            return new ResponseEntity<>(trip, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
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
