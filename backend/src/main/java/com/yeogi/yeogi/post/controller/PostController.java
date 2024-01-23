package com.yeogi.yeogi.post.controller;

import com.yeogi.yeogi.post.dto.PostRegisterDto;
import com.yeogi.yeogi.post.dto.PostResponseDto;
import com.yeogi.yeogi.post.entity.Post;
import com.yeogi.yeogi.post.service.PostService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@Tag(name = "게시판 API", description = "게시판 관련 API입니다.")
@RestController
@RequiredArgsConstructor
@RequestMapping("/board")
public class PostController {

    private final PostService postService;

    @GetMapping
    @Operation(summary = "게시판 전체글 조회 메서드", description = "게시판 전체 글을 조회합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공시 글 목록, 실패시 Fail 반환")
    })
    public ResponseEntity<?> getPosts() {
        List<PostResponseDto> posts = postService.getPosts();
        if (posts != null) {
            return new ResponseEntity<>(posts, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }

    @GetMapping("/{postId}")
    @Operation(summary = "게시판 단일 글 조회 메서드", description = "게시판 글 하나를 조회합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공시 글 내용, 실패시 Fail 반환")
    })
    public ResponseEntity<?> getPost(@PathVariable Long postId) {
        PostResponseDto post = postService.getPost(postId);
        if (post != null) {
            return new ResponseEntity<>(post, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }

    @PostMapping
    @Operation(summary = "게시판 글 작성 메서드", description = "게시판에 글을 작성합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공시 완료 텍스트, 실패시 Fail 반환")
    })
    public ResponseEntity<?> createPost(@RequestBody PostRegisterDto post) {
        PostRegisterDto createPost = postService.createPost(post);
        if (createPost != null) {
            return new ResponseEntity<>("글 작성이 완료되었습니다.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }

    // 수정삭제 권한추가해야함
    @PutMapping("/{postId}")
    @Operation(summary = "게시판 글 수정 메서드", description = "게시판 글을 수정합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공시 수정 내용, 실패시 Fail 반환")
    })
    public ResponseEntity<?> updatePost(@PathVariable Long postId, @RequestBody PostRegisterDto post) {
        Long updatedPost = postService.updatePost(postId, post);
        if (updatedPost != null) {
            return new ResponseEntity<>(post, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }

    @DeleteMapping("/{postId}")
    @Operation(summary = "게시판 글 삭제 메서드", description = "게시판 글을 삭제합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공시 완료 텍스트, 실패시 Fail 반환")
    })
    public ResponseEntity<?> deletePost(@PathVariable Long postId) {
        boolean isDeleted = postService.deletePost(postId);
        if (isDeleted) {
            return new ResponseEntity<>("글 삭제가 완료되었습니다.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail", HttpStatus.OK);
        }
    }
}
