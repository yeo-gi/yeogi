import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LongBtn from '../components/LongBtn';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <LongBtn msg="로그인" route="Login" color={true} />
      <LongBtn msg="회원가입" route="Login" color={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    flex: 1,
    alignItems: 'center',
  },
});
