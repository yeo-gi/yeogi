package com.yeogi.yeogi.comment.service;

import com.yeogi.yeogi.comment.dto.CommentRegisterDto;
import com.yeogi.yeogi.comment.dto.CommentResponseDto;
import com.yeogi.yeogi.comment.entity.Comment;
import com.yeogi.yeogi.comment.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public CommentRegisterDto createRecomment(Long postId, Long commentId, CommentRegisterDto reCommentDto) {
        try {
            String content = reCommentDto.getContent();
            Long userId = reCommentDto.getUserId();

            Comment parentComment = commentRepository.findByCommentId(commentId);

            Comment savedRecomment = new Comment(content, userId, postId, parentComment);
            commentRepository.save(savedRecomment);
            return new CommentRegisterDto(savedRecomment);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<CommentResponseDto> getComments(Long postId) {
        try {
            List<Comment> comments = commentRepository.findAllByPost_PostId(postId);
            return comments.stream()
                    .filter(comment -> comment.getParent() == null)
                    .map(this::getRecomments)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            return null;
        }

    }

    private CommentResponseDto getRecomments(Comment comment) {
        List<Comment> reComments = commentRepository.findAllByParent_CommentId(comment.getCommentId());
        List<CommentResponseDto> reCommentsDto = new ArrayList<>();

        for (Comment reComment : reComments) {
            CommentResponseDto reCommentDto = new CommentResponseDto(reComment, Collections.emptyList());
            reCommentsDto.add(reCommentDto);
        }

        return new CommentResponseDto(comment, reCommentsDto);
    }
}
