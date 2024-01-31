import {View, ScrollView} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParam} from '../../components/navigation/useNavi';
import CommunityHeader from '../../components/community/CommunityHeader';
import Post from '../../components/community/CommunityPost';
import {styles} from '../../style/community/PostStyle';
import PostTravel from '../../components/community/PostTravel';

type DetailScreenRouteProp = RouteProp<RootStackParam, 'Post'>;

export default function PostPage() {
  const {params} = useRoute<DetailScreenRouteProp>();
  const page: string = 'Post';

  return (
    <ScrollView>
      <View style={styles.postContainer}>
        <CommunityHeader page={page} />
        <Post postId={params.postId} />
        <PostTravel />
      </View>
    </ScrollView>
  );
}
