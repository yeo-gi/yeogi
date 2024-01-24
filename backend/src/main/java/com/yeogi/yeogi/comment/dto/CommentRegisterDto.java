package com.yeogi.yeogi.comment.dto;

import com.yeogi.yeogi.comment.entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class CommentRegisterDto {

    private String content;
    private Long userId;

    public CommentRegisterDto(Comment comment) {
        this.content = comment.getContent();
        this.userId = comment.getUser().getUserId();
    }
}
