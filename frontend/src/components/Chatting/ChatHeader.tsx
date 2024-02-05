import {View, Text} from 'react-native';
import React from 'react';
import {useNavi} from '../navigation/useNavi';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {styles} from '../../style/chat/ChatHeaderStyle';

export default function ChatHeader({roomName}: {roomName: string}) {
  const navigation = useNavi();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Fontisto
          style={styles.backIcon}
          name="arrow-left-l"
          color="black"
          size={16}
          onPress={navigation.goBack}
        />
        <Text style={styles.titleText}>{roomName}</Text>
      </View>
    </View>
  );
}
