package com.yeogi.yeogi.comment.service;

import com.yeogi.yeogi.comment.dto.CommentRegisterDto;
import com.yeogi.yeogi.comment.entity.Comment;
import com.yeogi.yeogi.comment.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;

    @Override
    public CommentRegisterDto createComment(Long postId, CommentRegisterDto commentDto) {
        try {
            String content = commentDto.getContent();
            Long userId = commentDto.getUserId();


            Comment savedComment = new Comment(content, userId, postId);
            commentRepository.save(savedComment);
            return new CommentRegisterDto(savedComment);
        } catch (Exception e) {
            return null;
        }
    }
}
