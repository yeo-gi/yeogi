package com.yeogi.yeogi.post.dto;

import com.yeogi.yeogi.post.entity.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Optional;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostResponseDto {

    private Long postId;
    private String title;
    private String content;
    private LocalDateTime updatedDate;
    private Long userId;
    private String nickname;
    private String profileImg;

    public PostResponseDto(Post post) {
        this.postId = post.getPostId();
        this.title = post.getTitle();
        this.content = post.getContent();
        this.updatedDate = post.getUpdatedDate();
        this.userId = post.getUser().getUserId();
        this.nickname = post.getUser().getUserInfo().getNickName();
        this.profileImg = post.getUser().getUserInfo().getProfileImg();
    }
}
