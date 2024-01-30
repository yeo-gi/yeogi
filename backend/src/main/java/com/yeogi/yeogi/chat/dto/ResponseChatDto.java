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
public class ResponseChatDto {
    private Long userId;
    private String content;
    private LocalDateTime createdDate;
}
