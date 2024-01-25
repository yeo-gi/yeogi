package com.yeogi.yeogi.post.service;

import com.yeogi.yeogi.post.dto.PostRegisterDto;
import com.yeogi.yeogi.post.dto.PostResponseDto;
import com.yeogi.yeogi.post.entity.Post;

import java.util.List;

public interface PostService {
    List<PostResponseDto> getPosts();
    PostResponseDto getPost(Long postId);
    Post getPostForDto(Long postId);
    boolean createPost(PostRegisterDto post);
    Long updatePost(Long postId, PostRegisterDto post);
    boolean deletePost(Long postId);
    // boolean isAuthorized(Long postId, Long currentUserId);

}
