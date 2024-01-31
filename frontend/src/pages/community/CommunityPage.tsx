import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../style/community/CommunityHeaderStyles';
import CommunityHeader from '../../components/community/CommunityHeader';
import PostList from '../../components/community/PostList';
import {useNavi} from '../../components/navigation/useNavi';

export default function Community() {
  const navigation = useNavi();
  const page = 'List';

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <CommunityHeader page={page} />
          <View>
            <PostList />
            <Text onPress={() => navigation.navigate('ChatList')}>채팅</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
