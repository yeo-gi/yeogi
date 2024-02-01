import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

interface DefaultFontTextProps {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export function DefaultText(props: DefaultFontTextProps) {
  return (
    <Text style={[styles.defaultFontText, props.style]}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  defaultFontText: {
    fontFamily: 'Pretendard-Regular',
    color: 'black',
  },
});
