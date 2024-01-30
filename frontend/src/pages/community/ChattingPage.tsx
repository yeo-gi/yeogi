import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import {Stomp} from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const TextEncodingPolyfill = require('text-encoding');
Object.assign(global, {
  TextEncoder: TextEncodingPolyfill.TextEncoder,
  TextDecoder: TextEncodingPolyfill.TextDecoder,
});

export default function ChattingPage({
  route,
}: {
  route: {params: {roomId: number}};
}) {
  // function connect() {
  //   let url = 'http://10.0.2.2:8080/chat';
  //   let stompClient = Stomp.client(url);

  //   stompClient.webSocketFactory = function () {
  //     return new SockJS(url);
  //   };

  //   try {
  //     stompClient.connect({}, function () {
  //       console.log('연결');
  //       stompClient.subscribe('/sub/1', function (message) {
  //         console.log('웹에서 뭔가...', message);
  //       });
  //     });
  //   } catch (error) {
  //     console.error('연결 실패:', error);
  //   }

  //   return stompClient;
  // }

  // const sendMessage = stompClient => {
  //   if (stompClient) {
  //     stompClient.send('/pub/1', {}, '제발보내져봐요...??');
  //   } else {
  //     console.error('STOMP connection not established yet.');
  //   }
  // };

  // const stompClient = connect();
  useEffect(() => {
    const {roomId} = route.params;
    console.log('Received roomId:', roomId);
    // 여기서 roomId를 사용할 수 있습니다.
  }, [route.params]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>채팅</Text>
      {/* <Button title="메시지 보내기" onPress={() => sendMessage(stompClient)} /> */}
    </View>
  );
}
