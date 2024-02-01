package com.yeogi.yeogi.comment.entity;

import com.yeogi.yeogi.post.entity.Post;
import com.yeogi.yeogi.user.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "comment")
@Getter
@Builder
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

    @Column(name = "is_deleted")
    private boolean isDeleted;

    @ManyToOne
    @JoinColumn(name = "parent_id", nullable = false)
    private Comment parent;


    public void update(String content) {
        this.content = content;
    }

    public void delUpdate(String content) {
        this.content = content;
        this.isDeleted = true;
    }
}
