package com.yeogi.yeogi.chat.controllter;

import com.yeogi.yeogi.chat.dto.RegisterRoomDto;
import com.yeogi.yeogi.chat.service.ChatService;
import com.yeogi.yeogi.post.dto.PostRegisterDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Tag(name = "채팅 API", description = "채팅 관련 API입니다.")
@RestController
@RequiredArgsConstructor
@RequestMapping("/chatroom")
public class ChatController {

    private final ChatService chatService;

    @PostMapping
    @Operation(summary = "채팅방 생성 메서드", description = "채팅방을 생성합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공시 Success, 실패시 Fail 반환")
    })
    public ResponseEntity<?> createRoom(@RequestBody RegisterRoomDto room) {
        Long createdRoom = chatService.createRoom(room);
        if (createdRoom != null) {
            return new ResponseEntity<>(createdRoom, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }

}
