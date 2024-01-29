import {View, Text} from 'react-native';
import React from 'react';
import LongBtn from '../components/LongBtn';

export default function Home() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <LongBtn msg="로그인" route="Login" />
    </View>
  );
}
