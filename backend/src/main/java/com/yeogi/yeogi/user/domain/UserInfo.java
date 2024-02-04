package com.yeogi.yeogi.user.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.DynamicInsert;

@Embeddable
@Getter
@NoArgsConstructor
@SuperBuilder
@DynamicInsert
public class UserInfo {

    @Column(name = "nick_name", length = 16)
    private String nickName; //닉네임
    @Column(length = 150)
    private String introduce;//자기소개
    @Column(name = "profile_img") // 스토리지에 저장된 이미지 파일 이름
    private String profileImg;//프로필 이미지
    private Integer reported;//재제 수
    private Integer deleted;//탈퇴 여부
    private Integer banned;//신고 여부

//    public void updateMemberInfo(MemberUpdateRequest memberUpdateDto){
//        this.nickName = memberUpdateDto.getNickName();
//        this.introduce = memberUpdateDto.getIntroduce();
//    }

    public void updateProfileImg(String profileImg) {
        this.profileImg = profileImg;
    }
    public void updateReported(int reported){
        this.reported = reported;
    }
    public void updateDeleted(int deleted){
        this.deleted = deleted;
    }
    public void updateBanned(int banned){
        this.banned = banned;
    }
}
