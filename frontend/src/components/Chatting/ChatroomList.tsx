import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getChatroomList} from '../../apis/communityAPI/ChattingAPI';
import {Chatroom} from './ChatroomType';
import {useNavi} from '../navigation/useNavi';

export default function ChatroomList() {
  const [chatrooms, setChatrooms] = useState<Chatroom[]>([]);
  const navigation = useNavi();

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const chatList = await getChatroomList();
        setChatrooms(chatList);
      } catch (error) {
        console.error('에러!', error);
      }
    };

    fetchChatList();
  }, []);

  return (
    <View>
      {chatrooms.map((chatroom, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('Chatting', {
              roomId: chatroom.roomId,
              roomName: chatroom.chatRoomName,
              profileImg: chatroom.profileImg,
            })
          }>
          <View key={index}>
            <Text>{chatroom.chatRoomName}</Text>
            <Text>{chatroom.createdDate}</Text>
            <Text>{chatroom.lastChat}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
