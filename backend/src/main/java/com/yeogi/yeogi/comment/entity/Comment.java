package com.yeogi.yeogi.comment.entity;

import com.yeogi.yeogi.post.entity.Post;
import com.yeogi.yeogi.post.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "comment")
@Getter
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Long commentId;

    @ManyToOne
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "content")
    private String content;

    @Column(name = "comment_time")
    @CreationTimestamp
    private LocalDateTime commentTime;

    @ManyToOne
    @JoinColumn(name = "parent_id", nullable = false)
    private Comment comment;

    public Comment(String content, Long userId, Long postId) {
        this.content = content;
        this.user = new User(userId);
        this.post = new Post(postId);
    }
}
