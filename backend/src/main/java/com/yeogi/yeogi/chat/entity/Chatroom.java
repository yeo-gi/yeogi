package com.yeogi.yeogi.chat.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "chat_room")
@Getter
@Builder
public class Chatroom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_room_id")
    private Long chatRoomId;

    @Column(name = "chat_room_name")
    private String chatRoomName;

    @Column(name = "created_date")
    @CreationTimestamp
    private LocalDateTime createdDate;

    @Column(name = "last_chat")
    private String lastChat;

    @OneToMany(mappedBy = "chatroom")
    private List<Chatuser> chatUsers = new ArrayList<>();

    public void updateLastChat(String lastChat) {
        this.lastChat = lastChat;
    }
}
