package com.yeogi.yeogi.comment.controller;

import com.yeogi.yeogi.comment.dto.CommentRegisterDto;
import com.yeogi.yeogi.comment.dto.CommentResponseDto;
import com.yeogi.yeogi.comment.service.CommentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@Tag(name = "댓글 API", description = "댓글 관련 API입니다.")
@RestController
@RequiredArgsConstructor
@RequestMapping("/board/{postId}")
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/comment")
    @Operation(summary = "댓글 작성 메서드", description = "댓글을 작성합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공시 완료 텍스트, 실패시 Fail 반환")
    })
    public ResponseEntity<?> createComment(@PathVariable Long postId, @RequestBody CommentRegisterDto comment) {
        boolean createdComment = commentService.createComment(postId, comment);
        if (createdComment) {
            return new ResponseEntity<>("댓글 작성이 완료되었습니다.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }

    @PostMapping("/comment/{commentId}")
    @Operation(summary = "대댓글 작성 메서드", description = "대댓글을 작성합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공시 완료 텍스트, 실패시 Fail 반환")
    })
    public ResponseEntity<?> createRecomment(@PathVariable Long postId, @PathVariable Long commentId, @RequestBody CommentRegisterDto comment) {
        boolean createdRecomment = commentService.createRecomment(postId, commentId, comment);
            if (createdRecomment) {
                return new ResponseEntity<>("대댓글 작성이 완료되었습니다.", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Fail", HttpStatus.OK);
            }
    }


    @GetMapping("/comment")
    @Operation(summary = "댓글 조회 메서드", description = "게시글의 댓글을 조회합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공시 댓글 목록, 실패시 Fail 반환")
    })
    public ResponseEntity<?> getComments(@PathVariable Long postId) {
        List<CommentResponseDto> comments = commentService.getComments(postId);
        if (comments != null) {
            return new ResponseEntity<>(comments, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }

    @PutMapping("/comment/{commentId}")
    @Operation(summary = "댓글 수정 메서드", description = "게시글의 댓글을 수정합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공시 성공 텍스트, 실패시 Fail 반환")
    })
    public ResponseEntity<?> updateComment(@PathVariable Long commentId, @RequestBody CommentRegisterDto comment) {
        Long updatedComment = commentService.updateComment(commentId, comment);
        if (updatedComment != null) {
            return new ResponseEntity<>("댓글 수정이 완료되었습니다.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }

    @PutMapping("/comment/{commentId}/{parentCommentId}")
    @Operation(summary = "대댓글 수정 메서드", description = "대댓글을 수정합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공시 성공 텍스트, 실패시 Fail 반환")
    })
    public ResponseEntity<?> updateRecomment(@PathVariable Long commentId, @PathVariable Long parentCommentId, @RequestBody CommentRegisterDto comment) {
        Long updatedComment = commentService.updateRecomment(commentId, parentCommentId, comment);
        if (updatedComment != null) {
            return new ResponseEntity<>("댓글 수정이 완료되었습니다.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }

    @DeleteMapping("/comment/{commentId}")
    @Operation(summary = "댓글 삭제 메서드", description = "게시글의 댓글을 삭제합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공시 성공 텍스트, 실패시 Fail 반환")
    })
    public ResponseEntity<?> deleteComment(@PathVariable Long postId, @PathVariable Long commentId) {
        boolean deleteComment = commentService.deleteComment(commentId);
        if (deleteComment) {
            return new ResponseEntity<>("댓글 삭제가 완료되었습니다.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }

    @DeleteMapping("/comment/{commentId}/{parentCommentId}")
    @Operation(summary = "대댓글 삭제 메서드", description = "댓글의 대댓글을 삭제합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공시 성공 텍스트, 실패시 Fail 반환")
    })
    public ResponseEntity<?> deleteRecomment(@PathVariable Long postId, @PathVariable Long parentCommentId, @PathVariable Long commentId) {
        boolean deleteRecomment = commentService.deleteRecomment(commentId, parentCommentId);
        if (deleteRecomment) {
            return new ResponseEntity<>("대댓글 삭제가 완료되었습니다.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }
}
