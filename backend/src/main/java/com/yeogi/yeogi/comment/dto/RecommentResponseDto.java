package com.yeogi.yeogi.comment.dto;

import com.yeogi.yeogi.comment.entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder
public class RecommentResponseDto {
    private Long postId;
    private Long commentId;
    private String nickname;
    private String content;
    private LocalDateTime commentTime;

    public RecommentResponseDto(Comment comment) {
        this.postId = comment.getPost().getPostId();
        this.commentId = comment.getCommentId();
        this.nickname = comment.getUser().getUserInfo().getNickName();
        this.content = comment.getContent();
        this.commentTime = comment.getCommentTime();
    }
}
