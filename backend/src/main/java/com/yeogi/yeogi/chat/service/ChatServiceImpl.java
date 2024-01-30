package com.yeogi.yeogi.chat.service;

import com.yeogi.yeogi.chat.dto.RegisterChatDto;
import com.yeogi.yeogi.chat.dto.RegisterRoomDto;
import com.yeogi.yeogi.chat.entity.Chat;
import com.yeogi.yeogi.chat.entity.Chatroom;
import com.yeogi.yeogi.chat.entity.Chatuser;
import com.yeogi.yeogi.chat.repository.ChatRepository;
import com.yeogi.yeogi.chat.repository.ChatroomRepository;
import com.yeogi.yeogi.chat.repository.ChatuserRepository;
import com.yeogi.yeogi.comment.entity.Comment;
import com.yeogi.yeogi.comment.repository.UserRepository;
import com.yeogi.yeogi.post.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.logging.Logger;

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
    public void saveLastMessage(Long roomId, String content) {
        Chatroom chatroom = chatroomRepository.findById(roomId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 채팅창입니다."));

        chatroom.updateLastChat(content);
    }

    // 채팅 저장
    public void saveMessage(Long roomId, Long userId, String message) {

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
    }
}
