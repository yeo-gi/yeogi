import React from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../style/community/CommunityHeaderStyles';
import CommunityHeader from '../../components/community/CommunityHeader';
import PostList from '../../components/community/PostList';

export default function Community() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CommunityHeader />
        <View>
          <PostList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
