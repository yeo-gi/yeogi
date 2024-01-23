package com.yeogi.yeogi.post.repository;

import com.yeogi.yeogi.post.dto.PostResponseDto;
import com.yeogi.yeogi.post.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;
import java.util.Optional;


public interface PostRepository extends JpaRepository<Post, Long> {

    Collection<Post> findByTitleContaining(String keyword);

    @Query("SELECT new com.yeogi.yeogi.post.dto.PostResponseDto(p.postId, p.title, p.content, p.updatedDate, u.userId, u.nickname) " +
            "FROM Post p JOIN p.user u")
    List<PostResponseDto> findAllPostResponseDto();
    Post findByPostId(Long postId);
}
