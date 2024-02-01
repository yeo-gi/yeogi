package com.yeogi.yeogi.chat.entity;

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
@Table(name = "chat")
@Getter
@Builder
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_id")
    private Long chatId;

    @Column(name = "content")
    private String content;

    @Column(name = "created_time")
    @CreationTimestamp
    private LocalDateTime createdTime;

    @Column(name = "is_checked")
    private boolean isChecked;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "chat_room_id", nullable = false)
    private Chatroom chatroom;
}
