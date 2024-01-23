package com.yeogi.yeogi.post.dto;

import com.yeogi.yeogi.post.entity.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder
public class PostRegisterDto {

    private String title;
    private String content;
    private Long userId;

    public PostRegisterDto(Post post) {
        this.title = post.getTitle();
        this.content = post.getContent();
        this.userId = post.getUser().getUserId();
    }

}
