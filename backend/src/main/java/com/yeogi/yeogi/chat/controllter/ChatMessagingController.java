package com.yeogi.yeogi.chat.controllter;

import com.yeogi.yeogi.chat.service.ChatService;
import com.yeogi.yeogi.chat.service.ChatServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Controller;

@Slf4j
@RequiredArgsConstructor
@Controller
public class ChatMessagingController {

    private final ChatService chatService;

    @MessageMapping("/{roomId}")
    @SendTo("/sub/{roomId}")
    public boolean chatMessage(@Payload String message, @DestinationVariable Long roomId, StompHeaderAccessor accessor) {
        try {
            log.info("받은 텍스트 메시지: {}", message);
            Long userId = (Long) accessor.getSessionAttributes().get("userId");

            chatService.saveLastMessage(roomId, message);
            chatService.saveMessage(roomId, userId, message);
        } catch (Exception e) {
            log.error("에러", e);
        }

        return true;
    }

}
