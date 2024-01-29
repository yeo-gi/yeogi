package com.yeogi.yeogi.chat.controllter;

import com.yeogi.yeogi.chat.entity.Chat;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Tag(name = "채팅 API", description = "채팅 관련 API입니다.")
@RequiredArgsConstructor
@RequestMapping
public class ChatController {

    @MessageMapping("/{chatRoomId}")
    @SendTo("/chat/{chatRoomId}")
    public boolean chatMessage(@DestinationVariable Long chatRoomId, Chat message) {
        try {
            log.info("{}번 방에서 받은거: {}", chatRoomId, message.getContent());
        } catch (Exception e) {
            log.error("에러", e);
        }

        return true;
    }

}
