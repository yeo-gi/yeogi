package com.yeogi.yeogi.post.entity;

import com.yeogi.yeogi.chat.entity.Chatroom;
import com.yeogi.yeogi.chat.entity.Chatuser;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

//TODO 1.User 랑 Comment entity 를 post 패키지에 넣어논 이유가 있으신쥐..?
//User는 임시.. 입니다요 코멘트는.. 그러게요?


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "nickname", nullable = false)
    private String nickname;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "joined_trips")
    private String joinedTrips;

    @Column(name = "profile_img")
    private String profileImg;

    @OneToMany(mappedBy = "user")
    private List<Chatuser> chatUsers = new ArrayList<>();


    public User(Long userId) {
        this.userId = userId;
    }

}
