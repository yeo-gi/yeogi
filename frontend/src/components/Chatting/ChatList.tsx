import {View, Text} from 'react-native';
import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {Chat} from './ChatType';
import {getChat} from '../../apis/communityAPI/ChattingAPI';

type ChatListProps = {
  roomId: number;
  chats: Chat[];
  setChats: Dispatch<SetStateAction<Chat[]>>;
};

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
