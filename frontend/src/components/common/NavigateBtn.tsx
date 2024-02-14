import React from 'react';
import {Pressable, Text, View} from 'react-native';
import RoundedBtnStyles from '../../style/common/RoundedBtnStyles';
import {useNavi} from '../navigation/useNavi';

type BtnContent = {
  msg: string;
  route: string;
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
  width?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
};

export default function NavigateBtn(props: BtnContent) {
  const navigation = useNavi();
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

  let style: object;
  if (props.isColor) {
    if (props.isBlue) {
      style = styles.blueColored;
    } else {
      style = styles.colored;
    }
  } else {
    if (props.isBlue) {
      style = styles.blueOutlined;
    } else {
      style = styles.outlined;
    }
  }

  return (
    <View
      style={[
        styles.container,
        // props.isColor ? styles.colored : styles.outlined,
        style,
      ]}>
      <Pressable
        onPress={() => navigation.navigate(props.route as never)}
        style={styles.button}
        disabled={props.isDisabled ?? false}>
        <Text style={[styles.font]}>{props.msg}</Text>
      </Pressable>
    </View>
  );
}
