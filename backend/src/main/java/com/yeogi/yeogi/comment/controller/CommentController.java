package com.yeogi.yeogi.comment.controller;

import com.yeogi.yeogi.comment.dto.CommentRegisterDto;
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

@Slf4j
@Tag(name = "댓글 API", description = "댓글 관련 API입니다.")
@RestController
@RequiredArgsConstructor
@RequestMapping("/board/{postId}")
public class CommentController {

    private final CommentService commentService;

    @PostMapping
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
}
