package com.yeogi.yeogi.chat.controllter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.yeogi.yeogi.chat.dto.GetMessageDto;
import com.yeogi.yeogi.chat.entity.Chat;
import com.yeogi.yeogi.chat.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.util.HashMap;

@Slf4j
@RequiredArgsConstructor
@Controller
public class ChatMessagingController {

    private final ChatService chatService;
    private final ObjectMapper objectMapper;

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/{roomId}")
    // @SendTo("/sub/{roomId}")
    public void chatMessage(@Payload String message, @DestinationVariable Long roomId) {
        try {
            GetMessageDto chatMessageDto = objectMapper.readValue(message, GetMessageDto.class);

            chatService.saveLastMessage(roomId, chatMessageDto.getMessage());
            Chat savedChat = chatService.saveMessage(roomId, chatMessageDto.getUserId(), chatMessageDto.getMessage());

            HashMap<String, Object> payload = new HashMap<>();
            payload.put("message", savedChat.getContent());
            payload.put("createdDate", savedChat.getCreatedTime());
            payload.put("userId", savedChat.getUser().getUserId());

            simpMessagingTemplate.convertAndSend("/sub/" + roomId, payload);


        } catch (Exception e) {
            log.error("에러", e);
        }
    }

}
