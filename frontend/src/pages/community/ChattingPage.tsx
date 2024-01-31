import {ScrollView, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParam} from '../../components/navigation/useNavi';
import ChatBtn from '../../components/chatting/Chat';
import ChatList from '../../components/chatting/ChatList';
import {Chat} from '../../components/chatting/ChatType';

const TextEncodingPolyfill = require('text-encoding');
Object.assign(global, {
  TextEncoder: TextEncodingPolyfill.TextEncoder,
  TextDecoder: TextEncodingPolyfill.TextDecoder,
});

type DetailScreenRouteProp = RouteProp<RootStackParam, 'Chatting'>;

export default function ChattingPage() {
  const {params} = useRoute<DetailScreenRouteProp>();
  const [chats, setChats] = useState<Chat[]>([]);

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    // 스크롤뷰가 렌더링될 때 스크롤을 맨 아래로 내리도록 함
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({animated: false});
    }
  }, [chats]);

  return (
    <ScrollView ref={scrollViewRef}>
      <View>
        <ChatList roomId={params.roomId} chats={chats} setChats={setChats} />
        <ChatBtn roomId={params.roomId} chats={chats} setChats={setChats} />
      </View>
    </ScrollView>
  );
}
