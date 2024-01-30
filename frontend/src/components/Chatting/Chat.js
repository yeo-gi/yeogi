import {View, Button} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Stomp} from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import ChatInput from './ChatInput';

const TextEncodingPolyfill = require('text-encoding');
Object.assign(global, {
  TextEncoder: TextEncodingPolyfill.TextEncoder,
  TextDecoder: TextEncodingPolyfill.TextDecoder,
});

export default function ChatBtn({roomId}) {
  const stompClientRef = useRef(null);

  useEffect(() => {
    const connect = () => {
      const url = 'http://10.0.2.2:8080/chat';
      const stompClient = Stomp.client(url);

      stompClient.webSocketFactory = function () {
        return new SockJS(url);
      };

      try {
        stompClient.connect({}, () => {
          console.log('연결');
          stompClient.subscribe(`/sub/${roomId}`, message => {
            console.log('웹에서 뭔가...', JSON.parse(message.body));
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
  }, [roomId]);

  const [text, setText] = useState('');
  console.log(text);

  const sendMessage = () => {
    if (stompClientRef.current) {
      stompClientRef.current.send(
        `/pub/${roomId}`,
        {},
        JSON.stringify({message: text, userId: 1}),
      );
    } else {
      console.error('연결 안됨');
    }
  };

  return (
    <View>
      <ChatInput setText={setText} />
      <Button title="전송" onPress={sendMessage} />
    </View>
  );
}
