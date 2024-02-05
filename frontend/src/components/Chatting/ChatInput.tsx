import React from 'react';
import {TextInput} from 'react-native';

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function ChatInput({text, setText}: Props) {
  return <TextInput value={text} onChangeText={text => setText(text)} />;
}
