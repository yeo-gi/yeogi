import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {getChat} from '../../apis/communityAPI/ChattingAPI';
import {ChatListProps} from './ChatListType';

export default function ChatList({roomId, chats, setChats}: ChatListProps) {
  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const chatList = await getChat(roomId);
        setChats(chatList);
      } catch (error) {
        console.error('에러!', error);
      }
    };

    fetchChatList();
  }, [roomId, setChats]);

  return (
    <View>
      {chats.map((chat, index) => (
        <View key={index}>
          <Text>{`User ${chat.userId}: ${chat.content}`}</Text>
          <Text>{`Date: ${chat.createdDate}`}</Text>
        </View>
      ))}
    </View>
  );
}
