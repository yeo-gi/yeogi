import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../style/community/CommunityHeaderStyles';
import CommunityHeader from '../../components/community/CommunityHeader';
import PostList from '../../components/community/PostList';
import {useNavigation} from '@react-navigation/native';

export default function Community() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CommunityHeader />
        <View>
          <PostList />
          <Text onPress={() => navigation.navigate('Chatting' as never)}>
            채팅
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
