import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../style/common/BasicContainerStyles';
import NavigateBtn from '../components/common/NavigateBtn';

export default function Start() {
  return (
    <View style={styles.container}>
      <Text>Start</Text>
      <NavigateBtn msg="로그인" route="Login" isColor={true} marginBottom={7} />
      <NavigateBtn msg="회원가입" route="Signup" isColor={false} />
    </View>
  );
}
