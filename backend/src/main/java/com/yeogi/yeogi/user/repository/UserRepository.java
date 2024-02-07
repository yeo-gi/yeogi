package com.yeogi.yeogi.user.repository;

import com.yeogi.yeogi.user.domain.User;
import jakarta.annotation.Nullable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNullApi;

import java.lang.reflect.Member;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByUserId(Long userId);
}
