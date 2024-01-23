package com.yeogi.yeogi.post.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

//TODO 1.User 랑 Comment entity 를 post 패키지에 넣어논 이유가 있으신쥐..?


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


    public User(Long userId) {
        this.userId = userId;
    }
}
