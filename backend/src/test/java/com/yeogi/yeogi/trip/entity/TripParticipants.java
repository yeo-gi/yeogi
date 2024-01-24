package com.yeogi.yeogi.trip.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Table(name = "trip_participants")
public class TripParticipants {

    @Id
    @GeneratedValue
    @Column(name = "participant_id")
    private Long participantId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "trip_id", nullable = false)
    private Trip tripId;

    @Enumerated(EnumType.STRING)
    private InvitationStatus status;  // 초대 상태 [WAITING, ACCEPTED, REJECTED]
}
