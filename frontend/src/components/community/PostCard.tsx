import {View, Image} from 'react-native';
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
  const truncatedTitle = truncateText(post.title, 23);
  const truncatedContent = truncateText(post.content, 30);

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
        <DefaultText style={styles.postTitle}>{truncatedTitle}</DefaultText>
        <DefaultText style={styles.postContent}>{truncatedContent}</DefaultText>
      </View>
    </View>
  );
}
