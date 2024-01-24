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
        CommentRegisterDto createdComment = commentService.createComment(postId, comment);
        if (createdComment != null) {
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
        CommentRegisterDto createdRecomment = commentService.createRecomment(postId, commentId, comment);
            if (createdRecomment != null) {
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
}
