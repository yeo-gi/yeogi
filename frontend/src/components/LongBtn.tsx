import React from 'react';
import {Pressable, Text} from 'react-native';

type BtnContent = {
  msg: string;
  onPressed: Function;
};

export default function LongBtn(props: BtnContent) {
  return (
    <Pressable onPress={props.onPressed()}>
      <Text>{props.msg}</Text>
    </Pressable>
  );
}
