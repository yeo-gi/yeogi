import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Stomp} from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const TextEncodingPolyfill = require('text-encoding');
Object.assign('global', {
  TextEncoder: TextEncodingPolyfill.TextEncoder,
  TextDecoder: TextEncodingPolyfill.TextDecoder,
});

export default function ChattingPage() {
  function connect() {
    let url = 'http://10.0.2.2:8080/chat';
    let stompClient = Stomp.client(url);

    stompClient.webSocketFactory = function () {
      return new SockJS(url);
    };

    try {
      stompClient.connect({}, function () {
        console.log('연결');
        stompClient.subscribe('/sub', function (greeting) {
          console.log('정보', greeting);
        });
        stompClient.send('/pub', {}, '제발보내져봐요...');
      });
    } catch (error) {
      console.error('연결 실패:', error);
    }
  }

  useEffect(() => {
    connect();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>채팅</Text>
    </View>
  );
}
