package com.yeogi.yeogi.comment.service;

import com.yeogi.yeogi.comment.dto.CommentRegisterDto;
import com.yeogi.yeogi.comment.dto.CommentResponseDto;

import java.util.List;


public interface CommentService {
    boolean createComment(Long postId, CommentRegisterDto comment);
    boolean createRecomment(Long postId, Long commentId, CommentRegisterDto comment);
    List<CommentResponseDto> getComments(Long postId);
    Long updateComment(Long commentId, CommentRegisterDto comment);
    Long updateRecomment(Long commentId, Long parentCommentId, CommentRegisterDto comment);
    boolean deleteComment(Long commentId);
    boolean deleteRecomment(Long recommentId, Long parentCommentId);
}
