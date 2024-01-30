import {View, Text} from 'react-native';
import React from 'react';
import RoundedBtn from '../components/common/RoundedBtn';
import {styles} from '../style/common/BasicContainerStyles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <RoundedBtn msg="로그인" route="Login" isColor={true} />
      <RoundedBtn msg="회원가입" route="Signup" isColor={false} />
    </View>
  );
}
