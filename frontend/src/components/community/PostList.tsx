import {TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Post} from './PostType';
import {getPostList} from '../../apis/communityAPI/CommunityAPI';
import PostCard from './PostCard';
import NoPosts from './NoPosts';
import {useNavi} from '../navigation/useNavi';

export default function PostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const navigation = useNavi();

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
        postList.map(post => (
          <TouchableOpacity
            key={post.postId}
            onPress={() => navigation.navigate('Post', {postId: post.postId})}>
            <PostCard post={post} />
          </TouchableOpacity>
        ))
      )}
    </View>
  );
}
