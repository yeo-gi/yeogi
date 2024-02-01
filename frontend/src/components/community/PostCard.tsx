import {View, Image, Text} from 'react-native';
import React from 'react';
import {Post} from './PostType';
import {DefaultText} from '../../style/DefaultText';
import {styles} from '../../style/community/PostCardStyle';

type postProps = {
  post: Post;
};

const truncateText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + '...';
  }
  return text;
};

export default function PostCard({post}: postProps) {
  const truncatedTitle = truncateText(post.title, 32);

  return (
    <View style={styles.postCardContainer}>
      <View style={styles.profileContainer}>
        <Image
          source={
            post.profileImg
              ? {uri: post.profileImg}
              : require('../../assets/images/profile.png')
          }
          style={styles.image}
        />
        <DefaultText style={styles.profileTitle}>{post.nickname}</DefaultText>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>{truncatedTitle}</Text>
        <DefaultText style={styles.postContent}>{post.content}</DefaultText>
      </View>
    </View>
  );
}
