package com.yeogi.yeogi.user.api;

import com.yeogi.yeogi.user.params.NaverLoginParams;
import com.yeogi.yeogi.user.service.OAuthLoginService;
import com.yeogi.yeogi.user.tokens.AuthTokens;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
@Slf4j
public class AuthApi {
    private final OAuthLoginService oAuthLoginService;
    @PostMapping("/naver")
    public ResponseEntity<AuthTokens> loginNaver(@RequestBody NaverLoginParams params){
        return ResponseEntity.ok(oAuthLoginService.login(params));
    }
}
