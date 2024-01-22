package com.yeogi.yeogi.post.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class PostResponseDto {

    private String title;
    private String content;
    private LocalDateTime updatedDate;
    private String nickname;
}
