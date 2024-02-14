import {View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {CompatClient, Stomp} from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import ChatInput from './ChatInput';
import {ChatListProps} from './ChatListType';
import {styles} from '../../style/chat/ChatBtnStyle';
import Feather from 'react-native-vector-icons/Feather';
import {customColor} from '../../style/common/CommonStyle';

const TextEncodingPolyfill = require('text-encoding');
Object.assign(global, {
  TextEncoder: TextEncodingPolyfill.TextEncoder,
  TextDecoder: TextEncodingPolyfill.TextDecoder,
});

export default function ChatBtn({roomId, chats, setChats}: ChatListProps) {
  const stompClientRef = useRef<CompatClient | null>(null);

  useEffect(() => {
    const connect = () => {
      const url = 'http://10.0.2.2:8080/chat';
      const stompClient = Stomp.client(url);

      stompClient.webSocketFactory = function () {
        return new SockJS(url);
      } as any;

      try {
        stompClient.connect({}, () => {
          stompClient.subscribe(`/sub/${roomId}`, message => {
            console.log('웹에서 뭔가...', JSON.parse(message.body));
            const newMessage = JSON.parse(message.body);
            const addMessage = {
              userId: newMessage['userId'],
              content: newMessage['message'],
              createdDate: newMessage['createdDate'],
            };

            console.log('추가한거' + addMessage);

            const updatedChats = [...chats, addMessage];
            console.log('갈아끼우기' + updatedChats);
            setChats(updatedChats);
          });
        });
      } catch (error) {
        console.error('연결 실패:', error);
      }

      stompClientRef.current = stompClient;

      return stompClient;
    };

    connect();

    return () => {
      if (stompClientRef.current) {
        stompClientRef.current.disconnect();
        console.log('연결 해제');
      }
    };
  }, [roomId, chats, setChats]);

  const [text, setText] = useState('');

  const sendMessage = () => {
    if (stompClientRef.current && text.trim() !== '') {
      stompClientRef.current.send(
        `/pub/${roomId}`,
        {},
        JSON.stringify({message: text, userId: 1}),
      );
      setText('');
    } else {
      console.error('연결 안됨 또는 텍스트가 비어 있음');
    }
  };

  return (
    <View style={styles.btnContainer}>
      <View style={styles.chatInput}>
        <ChatInput text={text} setText={setText} />
      </View>
      <View style={styles.sendBtn}>
        <Feather
          name="send"
          color={customColor.blue}
          onPress={sendMessage}
          size={23}
        />
      </View>
    </View>
  );
}
