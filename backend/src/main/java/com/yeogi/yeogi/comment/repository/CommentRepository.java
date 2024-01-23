package com.yeogi.yeogi.comment.repository;

import com.yeogi.yeogi.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {

}
