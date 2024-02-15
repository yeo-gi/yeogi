import React from 'react';
import {DimensionValue, Pressable, Text, View} from 'react-native';
import RoundedBtnStyles from '../../style/common/RoundedBtnStyles';
import {useNavi} from '../navigation/useNavi';

type BtnContent = {
  msg: string;
  page: string | Function | (() => void); // 단순 페이지 이동 시에는 string 타입으로 페이지 이름 입력, 페이지 이동시 params가 필요하거나 다른 함수를 실행시키고 싶을 시엔 함수 형태로
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
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
};

export default function RoundedBtn(props: BtnContent) {
  const navigation = useNavi();
  const onPress = () => {
    if (typeof props.page === 'string') {
      navigation.navigate(props.page as never);
    } else {
      props.page();
    }
  };
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
        onPress={onPress}
        style={styles.button}
        disabled={props.isDisabled ?? false}>
        <Text style={[styles.font]}>{props.msg}</Text>
      </Pressable>
    </View>
  );
}
