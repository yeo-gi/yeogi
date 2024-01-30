package com.yeogi.yeogi.chat.dto;

import com.yeogi.yeogi.chat.entity.Chatroom;
import com.yeogi.yeogi.chat.entity.Chatuser;
import com.yeogi.yeogi.comment.entity.Comment;
import com.yeogi.yeogi.post.entity.Post;
import com.yeogi.yeogi.post.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegisterRoomDto {
    private Long userId;
    private Long otherUserId;
}
