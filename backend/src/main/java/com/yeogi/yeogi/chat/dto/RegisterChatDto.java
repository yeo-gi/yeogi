package com.yeogi.yeogi.chat.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegisterChatDto {
    private String content;
    private Long userId;
    private Long chatRoomId;
}
