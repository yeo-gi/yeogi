package com.yeogi.yeogi.trip.dto;

import com.yeogi.yeogi.trip.entity.InvitationStatus;
import com.yeogi.yeogi.trip.entity.TripParticipants;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class ParticipantsRegisterDto {

    private Long userId;
    private Long tripId;
    private InvitationStatus status;

    public TripParticipants toTripParticipants() {
        return TripParticipants.builder()
                .status(this.status).build();
    }
}
