package com.yeogi.yeogi.chat.controllter;

import com.yeogi.yeogi.chat.dto.RegisterRoomDto;
import com.yeogi.yeogi.chat.dto.ResponseChatDto;
import com.yeogi.yeogi.chat.dto.ResponseChatroomDto;
import com.yeogi.yeogi.chat.service.ChatService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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

    @GetMapping("/{roomId}")
    @Operation(summary = "채팅 불러오기 메서드", description = "채팅방에 맞는 채팅을 조회합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공시 채팅 리스트, 실패시 Fail 반환")
    })
    public ResponseEntity<?> getChattingList(@PathVariable Long roomId) {
        List<ResponseChatDto> chatList = chatService.getChatList(roomId);
        if (chatList != null) {
            return new ResponseEntity<>(chatList, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }


    @PostMapping("/get")
    @Operation(summary = "채팅방 불러오기 메서드", description = "유저의 채팅방을 조회합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공시 채팅방 리스트, 실패시 Fail 반환")
    })
    public ResponseEntity<?> getChatroomList(@RequestBody Map<String, Long> userIdMap) {
        List<ResponseChatroomDto> chatrooms = chatService.getChatRoomList(userIdMap.get("userId"));
        if (chatrooms != null) {
            return new ResponseEntity<>(chatrooms, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }

}
