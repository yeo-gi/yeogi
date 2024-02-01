package com.yeogi.yeogi.trip.dto;

import com.yeogi.yeogi.trip.entity.InvitationStatus;
import com.yeogi.yeogi.trip.entity.TripParticipants;
import com.yeogi.yeogi.user.dto.UserResponseDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ParticipantsRegisterDto {

//    private Long userId;
    private UserResponseDto user;
//    private Long tripId;
    private InvitationStatus status;

    public TripParticipants toTripParticipants() {
        return TripParticipants.builder()
                .status(this.status)
                .build();
    }
}
