import {View, ScrollView} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParam} from '../../components/navigation/useNavi';
import Post from '../../components/community/CommunityPost';
import {styles} from '../../style/community/PostStyle';
import PostTravel from '../../components/community/PostTravel';
import PageHeader from '../../components/common/PageHeader';

type DetailScreenRouteProp = RouteProp<RootStackParam, 'Post'>;

export default function PostPage() {
  const {params} = useRoute<DetailScreenRouteProp>();
  const page: string = 'Post';
  const title = '일행찾기 게시판';

  return (
    <ScrollView>
      <View style={styles.postContainer}>
        <PageHeader page={page} title={title} />
        <Post postId={params.postId} />
        <PostTravel />
      </View>
    </ScrollView>
  );
}
