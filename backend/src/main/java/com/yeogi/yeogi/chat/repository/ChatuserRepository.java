package com.yeogi.yeogi.chat.repository;

import com.yeogi.yeogi.chat.entity.Chatuser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ChatuserRepository extends JpaRepository<Chatuser, Long> {

    @Query("SELECT cu.chatroom.chatRoomId " +
            "FROM Chatuser cu " +
            "WHERE cu.user.userId = :userId OR cu.user.userId = :otherUserId " +
            "GROUP BY cu.chatroom.chatRoomId " +
            "HAVING COUNT(cu.chatroom.chatRoomId) = 2")
    Long findChatRoomByUserIds(@Param("userId") Long userId, @Param("otherUserId") Long otherUserId);

    List<Chatuser> findByUser_userId(Long userId);
    Optional<Chatuser> findByChatroom_ChatRoomIdAndUser_UserIdNot(Long chatRoomId, Long userId);
}
