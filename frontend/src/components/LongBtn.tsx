import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text} from 'react-native';

type BtnContent = {
  msg: string;
  route: String;
};

export default function LongBtn(props: BtnContent) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(props.route as never)}>
      <Text>{props.msg}</Text>
    </Pressable>
  );
}
