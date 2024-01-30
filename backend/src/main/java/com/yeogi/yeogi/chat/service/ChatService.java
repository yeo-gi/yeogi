package com.yeogi.yeogi.chat.service;

import com.yeogi.yeogi.chat.dto.RegisterRoomDto;
import org.springframework.stereotype.Service;

@Service

public interface ChatService {
    Long createRoom(RegisterRoomDto room);
    void saveLastMessage(Long roomId, String content);
}
