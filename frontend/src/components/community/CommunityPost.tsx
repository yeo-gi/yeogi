import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Post} from './PostType';
import {getPost} from '../../apis/communityAPI/CommunityAPI';
import PostMain from './PostMain';

export default function CommunityPost({postId}: {postId: number}) {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const newPost = await getPost(postId);
      setPost(newPost);
    };

    fetchPost();
  }, [postId]);

  return (
    <View>
      <PostMain post={post} />
    </View>
  );
}
