package com.yeogi.yeogi.post.service;

import com.yeogi.yeogi.post.dto.PostRegisterDto;
import com.yeogi.yeogi.post.dto.PostResponseDto;
import com.yeogi.yeogi.post.entity.Post;
import com.yeogi.yeogi.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    public Post getPostForDto(Long postId) {
        try {
            Optional<Post> postOptional = Optional.of(postRepository.findById(postId)
                    .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다.")));
            return postOptional.orElse(null);
        } catch (Exception e) {
            return null;
        }
    }



    @Override
    public PostRegisterDto createPost(PostRegisterDto postDto) {
        try {
            Post savedPost = postDto.toPost();
            postRepository.save(savedPost);
            return new PostRegisterDto(savedPost);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    @Transactional
    public Long updatePost(Long postId, PostRegisterDto postDto) {
        try {
            String title = postDto.getTitle();
            String content = postDto.getContent();

            Post needUpdatePost = postRepository.findByPostId(postId);
            needUpdatePost.update(title, content);
            return postId;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    @Transactional
    public boolean deletePost(Long postId) {
        try {
            postRepository.deleteById(postId);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
