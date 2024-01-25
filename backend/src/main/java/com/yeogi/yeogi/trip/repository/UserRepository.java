package com.yeogi.yeogi.trip.repository;

import com.yeogi.yeogi.trip.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
