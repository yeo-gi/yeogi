package com.yeogi.yeogi.user.domain;

import com.yeogi.yeogi.user.dto.OAuthInfoResponse;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

//TODO 1.User 랑 Comment entity 를 post 패키지에 넣어논 이유가 있으신쥐..?
//User는 임시.. 입니다요 코멘트는.. 그러게요?


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Column(nullable = false)
    private String name;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String birthday;


    @Column(name = "password")
    private String password;

    @Column(name = "joined_trips")
    private String joinedTrips;


    @Enumerated(EnumType.STRING)
    private OAuthProvider oAuthProvider;

    @Column(nullable = true, name = "refresh_token") // 초기에는 없음
    private String refreshToken;

    @Column(nullable = false, unique = true)
    private String code;

    @Embedded
    private UserInfo userInfo;

    @Column(nullable = false)
    private String gender;


    public void updateRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public void deleteRefreshToken() {
        this.refreshToken = null;
    }

}
