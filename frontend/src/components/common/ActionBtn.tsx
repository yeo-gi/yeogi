import React from 'react';
import {Pressable, Text, View} from 'react-native';
import RoundedBtnStyles from '../../style/common/RoundedBtnStyles';

type BtnContent = {
  msg: string;
  isColor: boolean;
  color?: string;
  borderRadius?: number;
  borderWidth?: number;
  emptyBorderColor?: string;
  fontSize?: number;
  isRegular?: boolean;
  isRound?: boolean;
  width?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  onPress?: () => void;
};

export default function ActionBtn(props: BtnContent) {
  const styles = RoundedBtnStyles({
    borderRadius: props.borderRadius,
    backgroundColor: props.color,
    borderColor: props.color,
    borderWidth: props.borderWidth,
    emptyBorderColor: props.emptyBorderColor,
    fontSize: props.fontSize,
    isRegular: props.isRegular,
    isColor: props.isColor,
    isRound: props.isRound,
    width: props.width,
    marginTop: props.marginTop,
    marginBottom: props.marginBottom,
    marginLeft: props.marginLeft,
  });

  return (
    <View
      style={[
        styles.container,
        props.isColor ? styles.colored : styles.outlined,
      ]}>
      <Pressable onPress={props.onPress} style={styles.button}>
        <Text style={[styles.font]}>{props.msg}</Text>
      </Pressable>
    </View>
  );
}
