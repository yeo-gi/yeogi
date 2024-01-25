package com.yeogi.yeogi.trip.dto;

import com.yeogi.yeogi.trip.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserResponseDto {

    private Long userId;
    private String nickname;
    private String profileImg;

    private UserResponseDto(Long userId, String nickname, String profileImg) {
        this.userId = userId;
        this.nickname = nickname;
        this.profileImg = profileImg;
    }

    public static UserResponseDto of(User user) {
        return new UserResponseDto(user.getUserId(), user.getNickname(), user.getProfileImg());
    }

    public User toUser() {
        return User.builder()
                .userId(this.userId)
                .nickname(this.nickname)
                .profileImg(this.profileImg)
                .build();
    }
}
