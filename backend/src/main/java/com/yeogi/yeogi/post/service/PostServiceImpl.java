package com.yeogi.yeogi.post.service;

import com.yeogi.yeogi.post.dto.PostRegisterDto;
import com.yeogi.yeogi.post.dto.PostResponseDto;
import com.yeogi.yeogi.post.entity.Post;
import com.yeogi.yeogi.post.repository.PostRepository;
import com.yeogi.yeogi.user.domain.User;
import com.yeogi.yeogi.user.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final Logger log = LoggerFactory.getLogger(getClass());

    @Override
    public List<PostResponseDto> getPosts() {
        try {
            List<Post> postList = postRepository.findAll();

            if (!postList.isEmpty()) {
                List<PostResponseDto> responseDtoList = postList.stream()
                        .map(PostResponseDto::new)
                        .collect(Collectors.toList());
                return responseDtoList;
            } else {
                return Collections.emptyList();
            }


        } catch (Exception e) {
            log.error("Error occurred while fetching posts", e);
            return null;
        }
    }

    @Override
    public PostResponseDto getPost(Long postId) {
        try {
            Optional<Post> optionalPost = postRepository.findById(postId);
            return optionalPost.map(PostResponseDto::new).orElse(null);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Post getPostForDto(Long postId) {
        try {
            Optional<Post> optionalPost = postRepository.findById(postId);

            return optionalPost.orElse(null);
        } catch (Exception e) {
            return null;
        }
    }



    @Override
    public boolean createPost(PostRegisterDto postDto) {
        try {
            User user = userRepository.findByUserId(postDto.getUserId())
                    .orElseThrow(() -> new EntityNotFoundException("유저가 존재하지 않습니다: " + postDto.getUserId()));

            Post savedPost = postDto.toPost(user);
            postRepository.save(savedPost);
            return true;
        } catch (Exception e) {
            log.info("에러", e);
            return false;
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
