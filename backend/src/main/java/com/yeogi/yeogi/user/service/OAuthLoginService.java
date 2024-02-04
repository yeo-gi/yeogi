package com.yeogi.yeogi.user.service;

import com.yeogi.yeogi.user.domain.User;
import com.yeogi.yeogi.user.domain.UserInfo;
import com.yeogi.yeogi.user.dto.OAuthInfoResponse;
import com.yeogi.yeogi.user.params.OAuthLoginParams;
import com.yeogi.yeogi.user.repository.UserRepository;
import com.yeogi.yeogi.user.tokens.AuthTokens;
import com.yeogi.yeogi.user.tokens.AuthTokensGenerator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class OAuthLoginService {
    private final UserRepository userRepository;
    private final AuthTokensGenerator authTokensGenerator;
    private final OAuthInfoService oAuthInfoService;

    @Transactional
    public AuthTokens login(OAuthLoginParams params) {
        OAuthInfoResponse oAuthInfoResponse = oAuthInfoService.request(params);
        log.info(oAuthInfoResponse.toString());
        log.info(oAuthInfoResponse.getProfileImage());
        // member가 없으면 회원가입 진행
        User user = findOrCreateMember(oAuthInfoResponse);


        log.info(user.toString());

        AuthTokens authTokens = authTokensGenerator.generate(user.getUserId());
        // RT 추가
        user.updateRefreshToken(authTokens.getRefreshToken());
        log.info(authTokens.getAccessToken());
        authTokens.setEmail(user.getEmail());
        authTokens.setNickName(user.getUserInfo().getNickName());
        authTokens.setProfileImg(user.getUserInfo().getProfileImg());
        authTokens.setMemberId(user.getUserId());
        return authTokens;
    }
//    private void reJoin(OAuthInfoResponse oAuthInfoResponse, User user){
//        UserInfo userInfo = UserInfo.builder()
//                .nickName(oAuthInfoResponse.getNickName())
//                .build();
//
//        userInfo.reJoinMember(memberInfo);
//    }


    private User newUser(OAuthInfoResponse oAuthInfoResponse) {

        UserInfo userInfo = UserInfo.builder()
                .nickName(oAuthInfoResponse.getNickName())
                .build();


        String fullEmail = oAuthInfoResponse.getEmail();
        String email = fullEmail.substring(0, fullEmail.indexOf("@"));

        User user = User.builder()
                .name(oAuthInfoResponse.getName())
                .email(email)
                .birthday(oAuthInfoResponse.getBirthday())
                .gender(oAuthInfoResponse.getGender())
                .code(oAuthInfoResponse.getCode())
                .oAuthProvider(oAuthInfoResponse.getOAuthProvider())
                .userInfo(userInfo)
                .build();

        return userRepository.save(user);
    }


    private User findOrCreateMember(OAuthInfoResponse oAuthInfoResponse) {

        String fullEmail = oAuthInfoResponse.getEmail();
        String email = fullEmail.substring(0, fullEmail.indexOf("@"));

//        return memberRepository.findByEmail(oAuthInfoResponse.getEmail())
        return userRepository.findByEmail(email)
                .orElseGet(() -> newUser(oAuthInfoResponse));
    }



}