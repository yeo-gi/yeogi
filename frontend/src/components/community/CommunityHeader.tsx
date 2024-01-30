import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../../style/community/CommunityHeaderStyles';
import Entypo from 'react-native-vector-icons/FontAwesome6';
import {useNavi} from '../navigation/useNavi';

export default function CommunityHeader() {
  const navigation = useNavi();

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text onPress={() => navigation.navigate('ChatList')}>채팅</Text>
        <Text style={styles.titleText}>일행찾기 게시판</Text>
        <Entypo
          style={styles.writingIcon}
          name="pencil"
          color="black"
          size={16}
          onPress={() => navigation.navigate('Posting' as never)}
        />
      </View>
    </View>
  );
}
