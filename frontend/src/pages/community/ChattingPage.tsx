import {View, Text} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParam} from '../../components/navigation/useNavi';
import ChatBtn from '../../components/Chatting/Chat';

const TextEncodingPolyfill = require('text-encoding');
Object.assign(global, {
  TextEncoder: TextEncodingPolyfill.TextEncoder,
  TextDecoder: TextEncodingPolyfill.TextDecoder,
});

type DetailScreenRouteProp = RouteProp<RootStackParam, 'Chatting'>;

export default function ChattingPage() {
  const {params} = useRoute<DetailScreenRouteProp>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>채팅</Text>
      <ChatBtn roomId={params.roomId} />
    </View>
  );
}
