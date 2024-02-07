package com.yeogi.yeogi.user.auth;

import com.yeogi.yeogi.user.domain.OAuthProvider;
import com.yeogi.yeogi.user.dto.OAuthInfoResponse;
import com.yeogi.yeogi.user.params.OAuthLoginParams;

public interface OAuthApiClient {
    // client 타입 변환
    OAuthProvider oAuthProvider();

    //Authorization Code를 기반으로 AT획득
    String requestAccessToken(OAuthLoginParams params);

    //AT기반으로 사용자 조회
    OAuthInfoResponse requestOAuthInfo(String accessToken);
}