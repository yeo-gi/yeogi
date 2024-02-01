import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNav from '../bottomnav/BottomNav';
import PostingPage from '../../pages/community/PostingPage';
import LoginPage from '../../pages/user/LoginPage';
import SignupPage from '../../pages/user/SignupPage';
import ChattingPage from '../../pages/community/ChattingPage';
import ChatListPage from '../../pages/community/ChatListPage';
import {
  OptionalAgreementPage,
  RequiredAgreementPage,
} from '../../pages/user/AgreementPage';

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
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupPage}
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
      <Stack.Screen
        name="RequriedAgreement"
        component={RequiredAgreementPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OptionalAgreement"
        component={OptionalAgreementPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
