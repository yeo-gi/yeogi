package com.yeogi.yeogi.comment.service;

import com.yeogi.yeogi.comment.dto.CommentRegisterDto;
import com.yeogi.yeogi.comment.dto.CommentResponseDto;
import com.yeogi.yeogi.comment.entity.Comment;
import com.yeogi.yeogi.comment.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
    public List<CommentResponseDto> getComments(Long postId) {
        try {
            List<Comment> comments = commentRepository.findAllByPost_PostId(postId);
            return comments.stream()
                    .map(this::getRecomments)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            return null;
        }

    }

    private CommentResponseDto getRecomments(Comment comment) {
        List<Comment> childComments = commentRepository.findAllByComment_CommentId(comment.getCommentId());
        List<CommentResponseDto> childCommentsDto = childComments.stream()
                .map(this::getRecomments)
                .collect(Collectors.toList());

        return new CommentResponseDto(comment, childCommentsDto);
    }
}
