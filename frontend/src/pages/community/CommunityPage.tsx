import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../style/common/PageHeaderStyles';
import PostList from '../../components/community/PostList';
import {useNavi} from '../../components/navigation/useNavi';
import InvitationPage from '../invitation/InvitationPage';
import PageHeader from '../../components/common/PageHeader';

export default function Community() {
  const navigation = useNavi();
  const page = 'List';
  const title = '일행찾기 게시판';

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <PageHeader page={page} title={title} isBack={false} />
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
