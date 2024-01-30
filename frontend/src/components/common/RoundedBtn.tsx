import React from 'react';
import {Pressable, Text, View} from 'react-native';
import RoundedBtnStyles from '../../style/common/RoundedBtnStyles';
import {useNavi} from '../navigation/useNavi';

type BtnContent = {
  msg: string;
  route?: string;
  isColor: boolean;
  color?: string;
  borderRadius?: number;
  borderWidth?: number;
  emptyBorderColor?: string;
  fontSize?: number;
  isRegular?: boolean;
  width?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  onPress?: () => void;
};

export default function RoundedBtn(props: BtnContent) {
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
        onPress={
          props.route !== undefined || props.route !== null
            ? () => navigation.navigate(props.route)
            : props.onPress
        }
        style={styles.button}>
        <Text style={[styles.font]}>{props.msg}</Text>
      </Pressable>
    </View>
  );
}
