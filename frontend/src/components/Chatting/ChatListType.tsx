import {Dispatch, SetStateAction} from 'react';
import {Chat} from './ChatType';

export type ChatListProps = {
  roomId: number;
  chats: Chat[];
  setChats: Dispatch<SetStateAction<Chat[]>>;
};
