package com.yeogi.yeogi.chat.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder
public class ChatMessageDto {
    private String content;
    private LocalDateTime createdDate;
    private Long userId;
    private Long chatRoomId;
}
