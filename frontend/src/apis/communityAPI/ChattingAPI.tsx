import {Chat} from '../../components/chatting/ChatType';
import {Chatroom} from '../../components/chatting/ChatroomType';
import {baseAxios} from '../BaseAxios';

// 전체 채팅방 조회
export const getChatroomList = async (): Promise<Chatroom[]> => {
  try {
    const response = await baseAxios.post('/chatroom/get', {userId: 1});
    console.log(response.data);
    return response.data;
  } catch (error) {
    return [];
  }
};

// 채팅 조회
export const getChat = async (roomId: number): Promise<Chat[]> => {
  try {
    const response = await baseAxios.get(`/chatroom/${roomId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return [];
  }
};

// 채팅방 생성
export const createChatroom = async (
  userId: number,
  otherUserId: number,
): Promise<number | null> => {
  const usersInfo = {
    userId: userId,
    otherUserId: otherUserId,
  };
  try {
    const response = await baseAxios.post('/chatroom', usersInfo);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return null;
  }
};
