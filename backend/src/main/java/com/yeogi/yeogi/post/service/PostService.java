package com.yeogi.yeogi.post.service;

import com.yeogi.yeogi.post.dto.PostRegisterDto;
import com.yeogi.yeogi.post.dto.PostResponseDto;
import com.yeogi.yeogi.post.entity.Post;

import java.util.List;

// TODO 3. 인터페이스 사용한 이유가 있으신쥐..?
public interface PostService {
    List<PostResponseDto> getPost();
    Post createPost(PostRegisterDto post);
}
