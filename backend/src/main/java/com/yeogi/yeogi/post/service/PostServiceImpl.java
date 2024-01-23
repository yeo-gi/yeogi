package com.yeogi.yeogi.post.service;

import com.yeogi.yeogi.post.dto.PostRegisterDto;
import com.yeogi.yeogi.post.dto.PostResponseDto;
import com.yeogi.yeogi.post.entity.Post;
import com.yeogi.yeogi.post.entity.User;
import com.yeogi.yeogi.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;

    //TODO 3. 네이밍 -> List 반환은 복수형 붙히는게 좋을 것 같아염 ~ >_<
    @Override
    public List<PostResponseDto> getPost() {
        try {
            return postRepository.findAllPostResponseDto();
        } catch (Exception e) {
            return null;
        }
    }

    //TODO 2. 이건 entity 그대로 Return 하는 이유가 있으신쥐..?
    @Override
    public Post createPost(PostRegisterDto postDto) {
        try {
            String title = postDto.getTitle();
            String content = postDto.getContent();
            Long userId = postDto.getUserId();

            Post post = new Post(title, content, userId);
            return postRepository.save(post);
        } catch (Exception e) {
            return null;
        }
    }
}
