//package com.yeogi.yeogi.chat.entity;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Embeddable;
//
//import java.io.Serializable;
//import java.util.Objects;
//
//@Embeddable
//public class ChatUserId implements Serializable {
//
//    @Column(name = "user_id")
//    private Long userId;
//
//    @Column(name = "chat_room_id")
//    private Long chatRoomId;
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        ChatUserId that = (ChatUserId) o;
//        return Objects.equals(userId, that.userId) &&
//                Objects.equals(chatRoomId, that.chatRoomId);
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(userId, chatRoomId);
//    }
//}
