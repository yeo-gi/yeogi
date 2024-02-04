package com.yeogi.yeogi.comment.dto;

import com.yeogi.yeogi.comment.entity.Comment;
import com.yeogi.yeogi.post.entity.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class CommentRegisterDto {

    private String content;
    private Long userId;


    public Comment toRecomment(Post post, Comment parent) {
        return Comment.builder()
                .content(this.content)
                .parent(parent)
                .post(post)
                .build();
    }

    public Comment toComment(Post post) {
        return Comment.builder()
                .content(this.content)
                .post(post)
                .build();
    }
}
