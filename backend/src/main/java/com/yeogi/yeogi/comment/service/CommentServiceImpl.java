package com.yeogi.yeogi.comment.service;

import com.yeogi.yeogi.comment.dto.CommentRegisterDto;
import com.yeogi.yeogi.comment.dto.CommentResponseDto;
import com.yeogi.yeogi.comment.dto.RecommentResponseDto;
import com.yeogi.yeogi.comment.entity.Comment;
import com.yeogi.yeogi.comment.repository.CommentRepository;
import com.yeogi.yeogi.post.entity.Post;
import com.yeogi.yeogi.post.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final PostService postService;

    @Override
    public boolean createComment(Long postId, CommentRegisterDto commentDto) {
        try {
            Post ownerPost = postService.getPostForDto(postId);

            Comment savedComment = commentDto.toComment(ownerPost);

            commentRepository.save(savedComment);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public boolean createRecomment(Long postId, Long commentId, CommentRegisterDto reCommentDto) {
        try {
            Comment parentComment = Optional.of(commentRepository.findByCommentId(commentId))
                    .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 코멘트입니다."));

            Post ownerPost = postService.getPostForDto(postId);

            Comment savedRecomment = reCommentDto.toRecomment(ownerPost, parentComment);
            commentRepository.save(savedRecomment);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public List<CommentResponseDto> getComments(Long postId) {
        try {
            List<Comment> comments = commentRepository.findAllByPost_PostId(postId);
            return comments.stream()
                    .filter(comment -> comment.getParent() == null)
                    .map(comment -> {
                        List<RecommentResponseDto> recomments = getRecomments(comment);
                        return new CommentResponseDto(comment, recomments);
                    })
                    .collect(Collectors.toList());
        } catch (Exception e) {
            return null;
        }
    }

    private List<RecommentResponseDto> getRecomments(Comment comment) {
        List<Comment> reComments = commentRepository.findAllByParent_CommentId(comment.getCommentId());
        List<RecommentResponseDto> reCommentsDto = new ArrayList<>();

        for (Comment reComment : reComments) {
            RecommentResponseDto reCommentDto = new RecommentResponseDto(reComment);
            reCommentsDto.add(reCommentDto);
        }

        return reCommentsDto;
    }


    @Override
    @Transactional
    public Long updateComment(Long commentId, CommentRegisterDto comment) {
        try {
            String content = comment.getContent();

            Comment needUpdateComment = Optional.of(commentRepository.findByCommentId(commentId))
                    .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 댓글입니다."));

            needUpdateComment.update(content);
            return commentId;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    @Transactional
    public Long updateRecomment(Long commentId, Long parentCommentId, CommentRegisterDto comment) {
        try {
            String content = comment.getContent();

            Comment parentComment = Optional.of(commentRepository.findByCommentId(parentCommentId))
                    .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 댓글입니다."));
            Comment needUpdateComment = Optional.of(commentRepository.findByCommentIdAndParent(commentId, parentComment))
                    .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 대댓글입니다."));

            needUpdateComment.update(content);
            return commentId;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    @Transactional
    public boolean deleteComment(Long commentId) {
        try {
            Comment comment = Optional.of(commentRepository.findByCommentId(commentId))
                    .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 댓글입니다."));
            List<Comment> childComments = commentRepository.findAllByParent(comment);

            if (childComments.isEmpty()) {
                commentRepository.deleteByCommentId(commentId);
            } else {
                comment.delUpdate("");
            }
            return true;
        } catch (Exception e){
            return false;
        }
    }

    @Override
    @Transactional
    public boolean deleteRecomment(Long recommentId, Long parentCommentId) {
        try {
            Comment parentComment = commentRepository.findByCommentId(parentCommentId);
            Comment recomment = Optional.of(commentRepository.findByCommentIdAndParent(recommentId, parentComment))
                    .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 대댓글입니다."));
            Long childCount = commentRepository.countByParent(recomment.getParent());

            commentRepository.deleteByCommentId(recommentId);

            if (childCount == 1 && parentComment.isDeleted()) {
                commentRepository.deleteByCommentId(parentCommentId);
            }

            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
