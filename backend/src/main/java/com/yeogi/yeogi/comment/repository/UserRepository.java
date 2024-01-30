package com.yeogi.yeogi.comment.repository;

import com.yeogi.yeogi.comment.entity.Comment;
import com.yeogi.yeogi.post.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
