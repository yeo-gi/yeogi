package com.yeogi.yeogi.post.service;

import com.yeogi.yeogi.post.dto.PostRegisterDto;
import com.yeogi.yeogi.post.dto.PostResponseDto;

import java.util.List;
import java.util.Optional;

public interface PostService {
    List<PostResponseDto> getPosts();
    PostResponseDto getPost(Long postId);
    PostRegisterDto createPost(PostRegisterDto post);

}
