package com.yeogi.yeogi.post.dto;

import com.yeogi.yeogi.post.entity.Post;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class PostRegisterDto {

    private String title;
    private String content;
    private Long userId;

}
