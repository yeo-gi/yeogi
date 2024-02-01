package com.yeogi.yeogi.user.repository;

import com.yeogi.yeogi.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
