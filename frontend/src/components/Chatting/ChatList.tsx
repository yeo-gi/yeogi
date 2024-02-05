import {View} from 'react-native';
import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {getChat} from '../../apis/communityAPI/ChattingAPI';
import MyChatBubble from './MyChatBubble';
import OtherChatbubble from './OtherChatBubble';
import {Chat} from './ChatType';

export default function ChatList({
  roomId,
  chats,
  setChats,
  profileImg,
}: {
  roomId: number;
  chats: Chat[];
  setChats: Dispatch<SetStateAction<Chat[]>>;
  profileImg: string;
}) {
  const userId = 1;

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
          {userId === chat.userId ? (
            <MyChatBubble chat={chat} />
          ) : (
            <OtherChatbubble chat={chat} profileImg={profileImg} />
          )}
        </View>
      ))}
    </View>
  );
}
