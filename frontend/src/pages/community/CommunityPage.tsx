import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../style/common/PageHeaderStyles';
import CommunityHeader from '../../components/common/PageHeader';
import PostList from '../../components/community/PostList';
import {useNavi} from '../../components/navigation/useNavi';
import InvitationPage from '../invitation/InvitationPage';

export default function Community() {
  const navigation = useNavi();
  const page = 'List';
  const title = '일행찾기 게시판';

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <CommunityHeader page={page} title={title} />
          <View>
            <PostList />
            <Text onPress={() => navigation.navigate('ChatList')}>채팅</Text>
            <InvitationPage />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
