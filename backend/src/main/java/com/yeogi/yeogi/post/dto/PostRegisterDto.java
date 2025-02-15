package com.yeogi.yeogi.post.dto;

import com.yeogi.yeogi.post.entity.Post;
import com.yeogi.yeogi.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostRegisterDto {

    private String title;
    private String content;
    private Long userId;

    public Post toPost(User user) {
        return Post.builder()
                .title(this.title)
                .content(this.content)
                .user(user)
                .build();
    }

}
