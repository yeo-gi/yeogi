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
import Start from '../../pages/Start';
import PostPage from '../../pages/community/PostPage';
import InvitationPage from '../../pages/invitation/InvitationPage';
import LocationSearchPage from '../../pages/trip/LocationSearchPage';
import SelectDatePage from '../../pages/schedule/SelectDatePage';
import MapPage from '../../pages/schedule/MapPage';
import TimeTable from '../schedule/TimeTable';

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
      <Stack.Screen
        name="Start"
        component={Start}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Post"
        component={PostPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Invitation"
        component={InvitationPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LocationSearch"
        component={LocationSearchPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectDate"
        component={SelectDatePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Map"
        component={MapPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TimeTable"
        component={TimeTable}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
