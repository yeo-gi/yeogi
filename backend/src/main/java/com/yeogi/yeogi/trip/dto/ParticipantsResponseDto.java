package com.yeogi.yeogi.trip.dto;

import com.yeogi.yeogi.trip.entity.InvitationStatus;
import com.yeogi.yeogi.trip.entity.TripParticipants;
import com.yeogi.yeogi.user.dto.UserResponseDto;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ParticipantsResponseDto {

    private UserResponseDto user;
    private InvitationStatus status;

    private ParticipantsResponseDto(UserResponseDto user, InvitationStatus status) {
        this.user = user;
        this.status = status;
    }

    public static ParticipantsResponseDto of(TripParticipants tripParticipants) {
        return new ParticipantsResponseDto(
                UserResponseDto.of(tripParticipants.getUser()), tripParticipants.getStatus()
        );
    }
}
