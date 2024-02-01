package com.yeogi.yeogi.chat.service;

import com.yeogi.yeogi.chat.dto.RegisterRoomDto;
import com.yeogi.yeogi.chat.dto.ResponseChatDto;
import com.yeogi.yeogi.chat.dto.ResponseChatroomDto;
import com.yeogi.yeogi.chat.entity.Chat;
import com.yeogi.yeogi.chat.entity.Chatroom;
import com.yeogi.yeogi.chat.entity.Chatuser;
import com.yeogi.yeogi.chat.repository.ChatRepository;
import com.yeogi.yeogi.chat.repository.ChatroomRepository;
import com.yeogi.yeogi.chat.repository.ChatuserRepository;
import com.yeogi.yeogi.user.entity.User;
import com.yeogi.yeogi.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ChatServiceImpl implements ChatService {


    private final ChatRepository chatRepository;
    private final ChatroomRepository chatroomRepository;
    private final ChatuserRepository chatuserRepository;
    private final UserRepository userRepository;

    // 1대1채팅방
    public Long createRoom(RegisterRoomDto room) {
        Long userId = room.getUserId();
        Long otherUserId = room.getOtherUserId();

        if (userId.equals(otherUserId)) {
            throw new IllegalArgumentException("두 사용자 ID는 같을 수 없습니다.");
        }

        log.info("아이디: {}, {}", userId, otherUserId);

        Long roomId = Optional.ofNullable(chatuserRepository.findChatRoomByUserIds(userId, otherUserId))
                .orElse(null);

        log.info("룸넘버: {}", roomId);

        if (roomId != null) {
            return roomId;
        } else {
            Chatroom newRoom = createChatroom(otherUserId);
            chatroomRepository.save(newRoom);

            Chatuser user1 = createChatuser(newRoom, userId);
            Chatuser user2 = createChatuser(newRoom, otherUserId);

            chatuserRepository.save(user1);
            chatuserRepository.save(user2);

            return newRoom.getChatRoomId();
        }
    }

    private Chatuser createChatuser(Chatroom chatroom, Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 유저입니다."));

        return Chatuser.builder()
                .chatroom(chatroom)
                .user(user)
                .build();
    }

    private Chatroom createChatroom(Long otherUserID) {
        return userRepository.findById(otherUserID)
                .map(user -> Chatroom.builder()
                        .chatRoomName(user.getNickname())
                        .build())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 유저입니다."));
    }

    // 마지막 메세지 저장
    @Transactional
    public void saveLastMessage(Long roomId, String content) {
        Chatroom chatroom = chatroomRepository.findById(roomId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 채팅창입니다."));

        chatroom.updateLastChat(content);
    }

    // 채팅 저장
    @Transactional
    public Chat saveMessage(Long roomId, Long userId, String message) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당하는 사용자가 없습니다."));

        Chatroom chatroom = chatroomRepository.findById(roomId)
                .orElseThrow(() -> new IllegalArgumentException("해당하는 채팅방이 없습니다."));

        Chat newchat = Chat.builder()
                .content(message)
                .user(user)
                .chatroom(chatroom)
                .build();
        chatRepository.save(newchat);

        return newchat;
    }

    // 사용자와의 채팅 목록 불러오기
    public List<ResponseChatDto> getChatList(Long roomId) {
        List<Chat> chatList = chatRepository.findByChatroom_ChatRoomIdOrderByCreatedTime(roomId);

        if (chatList == null || chatList.isEmpty()) {
            return Collections.emptyList();
        }

        List<ResponseChatDto> responseChatDtoList = chatList.stream()
                .map(chat -> ResponseChatDto.builder()
                        .userId(chat.getUser().getUserId())
                        .content(chat.getContent())
                        .createdDate(chat.getCreatedTime())
                        .build())
                .toList();

        return responseChatDtoList;
    }

    // 채팅방 불러오기
    public List<ResponseChatroomDto> getChatRoomList(Long userId) {
        List<Chatuser> chatusers = chatuserRepository.findByUser_userId(userId);
        List<ResponseChatroomDto> chatroomDtos = new ArrayList<>();

        for (Chatuser chatuser : chatusers) {
            Chatroom chatroom = chatuser.getChatroom();

            Chatuser otherUser = findOtherUserInChatRoom(chatroom.getChatRoomId(), userId)
                    .orElseThrow(() -> new RuntimeException("Other user not found"));

            ResponseChatroomDto dto = ResponseChatroomDto.builder()
                    .otherUserId(otherUser.getUser().getUserId())
                    .roomId(chatuser.getChatroom().getChatRoomId())
                    .ChatRoomName(otherUser.getUser().getNickname())
                    .lastChat(chatroom.getLastChat())
                    .profileImg(otherUser.getUser().getProfileImg())
                    .createdDate(chatroom.getCreatedDate())
                    .build();

            chatroomDtos.add(dto);
        }

        return chatroomDtos;
    }

    private Optional<Chatuser> findOtherUserInChatRoom(Long chatRoomId, Long userId) {
        return chatuserRepository.findByChatroom_ChatRoomIdAndUser_UserIdNot(chatRoomId, userId);
    }
}
