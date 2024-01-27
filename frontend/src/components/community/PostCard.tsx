import {View, Text} from 'react-native';
import React from 'react';
import {Post} from './PostType';

type postProps = {
  post: Post;
};

export default function PostCard({post}: postProps) {
  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.content}</Text>
    </View>
  );
}
