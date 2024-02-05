import {View, Text} from 'react-native';
import React from 'react';
import {Chat} from './ChatType';
import {styles} from '../../style/chat/MyChatBubbleStyle';

export default function MyChatBubble({chat}: {chat: Chat}) {
  return (
    <View style={styles.container}>
      <Text style={styles.bubbleText}>{chat.content}</Text>
    </View>
  );
}
