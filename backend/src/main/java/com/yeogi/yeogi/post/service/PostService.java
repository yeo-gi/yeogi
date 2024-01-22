package com.yeogi.yeogi.post.service;

import com.yeogi.yeogi.post.dto.PostRegisterDto;
import com.yeogi.yeogi.post.dto.PostResponseDto;
import com.yeogi.yeogi.post.entity.Post;

import java.util.List;

public interface PostService {
    List<PostResponseDto> getPost();
    Post createPost(PostRegisterDto post);
}
