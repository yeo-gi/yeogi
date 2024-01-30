import {Stomp} from '@stomp/stompjs';
import SockJS from 'sockjs-client';

let url = 'http://10.0.2.2:8080/chat';
let stompClient = Stomp.client(url);

stompClient.webSocketFactory = function () {
  return new SockJS(url);
};

export function connect(roomId) {
  try {
    stompClient.connect({}, function () {
      console.log('연결');
      stompClient.subscribe('/sub/1', function (message) {
        console.log('웹에서 뭔가...', message);
      });
    });
  } catch (error) {
    console.error('연결 실패:', error);
  }

  return stompClient;
}

export const sendMessage = stompClient => {
  if (stompClient) {
    stompClient.send('/pub/1', {}, '제발보내져봐요...??');
  } else {
    console.error('STOMP connection not established yet.');
  }
};
