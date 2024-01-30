package com.yeogi.yeogi.chat.service;

import com.yeogi.yeogi.chat.dto.RegisterChatDto;
import com.yeogi.yeogi.chat.dto.RegisterRoomDto;
import org.springframework.stereotype.Service;

@Service

public interface ChatService {
    Long createRoom(RegisterRoomDto room);
    void saveLastMessage(Long roomId, String content);
    void saveMessage(Long roomId, Long userId, String message);
}
