package com.yeogi.yeogi.comment.service;

import com.yeogi.yeogi.comment.dto.CommentRegisterDto;
import com.yeogi.yeogi.comment.dto.CommentResponseDto;

import java.util.List;


public interface CommentService {
    CommentRegisterDto createComment(Long postId, CommentRegisterDto comment);
    List<CommentResponseDto> getComments(Long postId);
}
