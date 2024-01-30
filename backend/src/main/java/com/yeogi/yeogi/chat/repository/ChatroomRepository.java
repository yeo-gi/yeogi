package com.yeogi.yeogi.chat.repository;

import com.yeogi.yeogi.chat.entity.Chatroom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatroomRepository extends JpaRepository<Chatroom, Long> {
}
