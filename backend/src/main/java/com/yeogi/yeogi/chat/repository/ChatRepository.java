package com.yeogi.yeogi.chat.repository;

import com.yeogi.yeogi.chat.entity.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatRepository extends JpaRepository<Chat, Long> {
    List<Chat> findByChatroom_ChatRoomIdOrderByCreatedTimeDesc(Long chatRoomId);
}
