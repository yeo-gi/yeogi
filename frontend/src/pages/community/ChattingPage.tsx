import {Keyboard, ScrollView, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParam} from '../../components/navigation/useNavi';
import ChatBtn from '../../components/chatting/Chat';
import ChatList from '../../components/chatting/ChatList';
import {Chat} from '../../components/chatting/ChatType';
import ChatHeader from '../../components/chatting/ChatHeader';
import {styles} from '../../style/chat/ChatPageStyle';

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
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({animated: false});
    }
  }, [chats]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollToEnd({animated: true});
        }
      },
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, [scrollViewRef]);

  return (
    <View style={styles.container}>
      <ChatHeader roomName={params.roomName} />
      <ScrollView ref={scrollViewRef}>
        <ChatList
          roomId={params.roomId}
          chats={chats}
          setChats={setChats}
          profileImg={params.profileImg}
        />
      </ScrollView>
      <ChatBtn roomId={params.roomId} chats={chats} setChats={setChats} />
    </View>
  );
}
