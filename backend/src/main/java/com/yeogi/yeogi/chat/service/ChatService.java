package com.yeogi.yeogi.chat.service;

import com.yeogi.yeogi.chat.dto.RegisterRoomDto;
import com.yeogi.yeogi.chat.dto.ResponseChatDto;
import com.yeogi.yeogi.chat.dto.ResponseChatroomDto;
import com.yeogi.yeogi.chat.entity.Chat;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public interface ChatService {
    Long createRoom(RegisterRoomDto room);
    void saveLastMessage(Long roomId, String content);
    Chat saveMessage(Long roomId, Long userId, String message);
    List<ResponseChatDto> getChatList(Long roomId);
    List<ResponseChatroomDto> getChatRoomList(Long userId);
}
