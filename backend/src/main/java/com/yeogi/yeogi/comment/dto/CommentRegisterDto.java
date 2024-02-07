package com.yeogi.yeogi.comment.dto;

import com.yeogi.yeogi.comment.entity.Comment;
import com.yeogi.yeogi.post.entity.Post;
import com.yeogi.yeogi.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CommentRegisterDto {

    private String content;
    private Long userId;


    public Comment toRecomment(Post post, Comment parent, User user) {
        return Comment.builder()
                .content(this.content)
                .parent(parent)
                .user(user)
                .post(post)
                .build();
    }

    public Comment toComment(Post post, User user) {
        return Comment.builder()
                .content(this.content)
                .user(user)
                .post(post)
                .build();
    }
}
