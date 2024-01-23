package com.yeogi.yeogi.post.dto;

import com.yeogi.yeogi.post.entity.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder
public class PostResponseDto {

    private Long postId;
    private String title;
    private String content;
    private LocalDateTime updatedDate;
    private Long userId;
    private String nickname;

    public PostResponseDto(Post post) {
        this.postId = post.getPostId();
        this.title = post.getTitle();
        this.content = post.getContent();
        this.updatedDate = post.getUpdatedDate();
        this.userId = post.getUser().getUserId();
        this.nickname = post.getUser().getNickname();
    }
}
