import {View, Text, Image} from 'react-native';
import React from 'react';
import {Chat} from './ChatType';
import {styles} from '../../style/chat/OtherChatBubbleStyle';

export default function OtherChatbubble({
  chat,
  profileImg,
}: {
  chat: Chat;
  profileImg: string;
}) {
  console.log(chat);
  return (
    <View style={styles.container}>
      <Image
        source={
          profileImg
            ? {uri: profileImg}
            : require('../../assets/images/profile.png')
        }
        style={styles.image}
      />
      <Text style={styles.bubbleText}>{chat.content}</Text>
    </View>
  );
}
