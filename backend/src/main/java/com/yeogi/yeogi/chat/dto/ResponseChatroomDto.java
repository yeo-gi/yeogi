package com.yeogi.yeogi.chat.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseChatroomDto {
    private Long otherUserId;
    private String ChatRoomName;
    private String lastChat;
    private String profileImg;
    private LocalDateTime createdDate;
}
