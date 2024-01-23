package com.yeogi.yeogi.comment.service;

import com.yeogi.yeogi.comment.dto.CommentRegisterDto;


public interface CommentService {
    CommentRegisterDto createComment(Long postId, CommentRegisterDto comment);
}
