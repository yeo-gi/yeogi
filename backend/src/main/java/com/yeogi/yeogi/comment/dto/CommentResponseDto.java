package com.yeogi.yeogi.comment.dto;

import com.yeogi.yeogi.comment.entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@Builder
public class CommentResponseDto {
    private Long postId;
    private Long commentId;
    private String nickname;
    private String content;
    private LocalDateTime commentTime;
    private List<RecommentResponseDto> reComments;

    public CommentResponseDto(Comment comment, List<RecommentResponseDto> reComments) {
        this.postId = comment.getPost().getPostId();
        this.commentId = comment.getCommentId();
        this.nickname = comment.getUser().getNickname();
        this.content = comment.getContent();
        this.commentTime = comment.getCommentTime();
        this.reComments = reComments;
    }
}
