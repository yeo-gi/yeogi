package com.yeogi.yeogi.comment.repository;

import com.yeogi.yeogi.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllByPost_PostId(Long postId);
    List<Comment> findAllByParent_CommentId(Long parentId);
    Comment findByCommentId(Long parentId);
}
