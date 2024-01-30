import React, {Dispatch, SetStateAction} from 'react';
import {TextInput} from 'react-native';

interface Props {
  setText: Dispatch<SetStateAction<String>>;
}

export default function ChatInput({setText}: Props) {
  return <TextInput onChangeText={text => setText(text)} />;
}
