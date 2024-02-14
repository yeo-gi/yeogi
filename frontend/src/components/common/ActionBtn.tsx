import React from 'react';
import {DimensionValue, Pressable, Text, View} from 'react-native';
import RoundedBtnStyles from '../../style/common/RoundedBtnStyles';

type BtnContent = {
  msg: string;
  isColor: boolean; // 색으로 채워진 버튼이냐, 테두리만 있는 버튼이냐
  isBlue?: boolean;
  isDisabled?: boolean;
  color?: string;
  borderRadius?: number;
  borderWidth?: number;
  emptyBorderColor?: string;
  fontSize?: number;
  isRegular?: boolean;
  isRound?: boolean;
  width?: DimensionValue;
  widthPer?: string;
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
    isDisabled: props.isDisabled,
    isRound: props.isRound,
    width: props.width,
    marginTop: props.marginTop,
    marginBottom: props.marginBottom,
    marginLeft: props.marginLeft,
  });

  const style = props.isColor ? styles.colored : styles.outlined;
  console.log(typeof style);

  return (
    <View
      style={[
        styles.container,
        props.isColor ? styles.colored : styles.outlined,
      ]}>
      <Pressable
        onPress={props.onPress}
        style={styles.button}
        disabled={props.isDisabled ?? false}>
        <Text style={[styles.font]}>{props.msg}</Text>
      </Pressable>
    </View>
  );
}
