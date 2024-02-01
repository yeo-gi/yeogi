import React from 'react';
import {TextInput} from 'react-native';

interface Props {
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function ChatInput({setText}: Props) {
  return <TextInput onChangeText={text => setText(text)} />;
}
