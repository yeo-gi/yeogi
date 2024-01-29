package com.yeogi.yeogi.chat.repository;

import com.yeogi.yeogi.chat.entity.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Long> {
}
