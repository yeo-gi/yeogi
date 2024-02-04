package com.yeogi.yeogi.user.tokens;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AuthTokens {
    private Long memberId;
    private String accessToken;
    private String refreshToken;
    private String grantType;
    private Long expiresIn;
    private String nickName;
    private String profileImg;
    private String email;
    // TODO: 2023-08-11 아이디,닉네임
    //private Long memberId;
    //private Long nickName;


    public AuthTokens(String accessToken, String refreshToken, String grantType, Long expiresIn) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.grantType = grantType;
        this.expiresIn = expiresIn;
    }

    public static AuthTokens of(String accessToken, String refreshToken, String grantType, Long expiresIn) {
        return new AuthTokens(accessToken, refreshToken, grantType, expiresIn);
    }
}