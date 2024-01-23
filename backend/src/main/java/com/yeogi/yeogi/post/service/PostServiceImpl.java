package com.yeogi.yeogi.post.service;

import com.yeogi.yeogi.post.dto.PostRegisterDto;
import com.yeogi.yeogi.post.dto.PostResponseDto;
import com.yeogi.yeogi.post.entity.Post;
import com.yeogi.yeogi.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;

    @Override
    public List<PostResponseDto> getPosts() {
        try {
            return postRepository.findAllPostResponseDto();
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public PostResponseDto getPost(Long postId) {
        try {
            Post optionalPost = postRepository.findByPostId(postId);
            return new PostResponseDto(optionalPost);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public PostRegisterDto createPost(PostRegisterDto postDto) {
        try {
            String title = postDto.getTitle();
            String content = postDto.getContent();
            Long userId = postDto.getUserId();

            Post savedPost = new Post(title, content, userId);
            postRepository.save(savedPost);
            return new PostRegisterDto(savedPost);
        } catch (Exception e) {
            return null;
        }
    }
}
