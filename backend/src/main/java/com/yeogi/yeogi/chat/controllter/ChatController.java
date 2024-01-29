package com.yeogi.yeogi.chat.controllter;

import com.yeogi.yeogi.chat.entity.Chat;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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

import java.util.Map;

@Slf4j
@Tag(name = "채팅 API", description = "채팅 관련 API입니다.")
@RequiredArgsConstructor
@Controller
public class ChatController {

    private final SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/1")
    @SendTo("/sub/1")
    public boolean chatMessage(@Payload String message, StompHeaderAccessor headerAccessor) {
        try {
            log.info("받은 텍스트 메시지: {}", message);
            log.info("가지세요", headerAccessor);
        } catch (Exception e) {
            log.error("에러", e);
        }

        return true;
    }



//    @MessageMapping("/sub/1")
//    public void sendMsg(@Payload Map<String,Object> data){
//        simpMessagingTemplate.convertAndSend("/sub/1",data);
//    }

}
