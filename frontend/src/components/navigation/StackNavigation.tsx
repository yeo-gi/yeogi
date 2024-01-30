import React from 'react';
import BottomNav from '../bottomnav/BottomNav';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostingPage from '../../pages/community/PostingPage';
import Login from '../../pages/user/Login';
import ChattingPage from '../../pages/community/ChattingPage';
import ChatListPage from '../../pages/community/ChatListPage';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomNav"
        component={BottomNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Posting"
        component={PostingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={ChattingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatList"
        component={ChatListPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
