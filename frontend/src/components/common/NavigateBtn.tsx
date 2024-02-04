import React from 'react';
import {Pressable, Text, View} from 'react-native';
import RoundedBtnStyles from '../../style/common/RoundedBtnStyles';
import {useNavi} from '../navigation/useNavi';

type BtnContent = {
  msg: string;
  route: string;
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
      <Pressable
        onPress={() => navigation.navigate(props.route as never)}
        style={styles.button}>
        <Text style={[styles.font]}>{props.msg}</Text>
      </Pressable>
    </View>
  );
}
