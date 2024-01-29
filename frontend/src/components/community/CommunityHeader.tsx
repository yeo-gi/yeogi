import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../../style/community/CommunityHeaderStyles';
import Entypo from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

export default function CommunityHeader() {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.titleContainer}>
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
