import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Post} from './PostType';
import {getPostList} from '../../apis/communityAPI/CommunityAPI';
import PostCard from './PostCard';
import NoPosts from './NoPosts';

export default function PostList() {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPostList = async () => {
      const posts = await getPostList();
      setPostList(posts);
    };

    fetchPostList();
  }, []);

  return (
    <View>
      {postList.length === 0 ? (
        <NoPosts />
      ) : (
        postList.map(post => <PostCard key={post.postId} post={post} />)
      )}
    </View>
  );
}
