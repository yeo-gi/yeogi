import {DimensionValue, StyleSheet} from 'react-native';
import {customColor, customFont} from './CommonStyle';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 49,
    borderRadius: 10,
  },
  colored: {
    backgroundColor: '#2F2F2F',
  },
  outlined: {
    borderColor: '#2F2F2F',
    borderWidth: 1,
  },
  emptyContent: {
    borderColor: customColor.gray50,
    borderWidth: 1,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = {
  borderRadius?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  emptyBorderColor?: string;
  fontSize?: number;
  isRegular?: boolean;
  isColor?: boolean;
  isRound?: boolean;
  width?: DimensionValue;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
};

export default function RoundedBtnStyles(props: Props) {
  const borderRadius = props.isRound ? 100 : props.borderRadius;
  return StyleSheet.create({
    container: {
      width: props.width ?? '100%',
      height: 49,
      borderRadius: borderRadius ?? 10,
      marginTop: props.marginTop ?? 0,
      marginBottom: props.marginBottom ?? 0,
      marginLeft: props.marginLeft ?? 0,
    },
    colored: {
      backgroundColor: props.backgroundColor ?? '#2F2F2F',
    },
    outlined: {
      borderColor: props.borderColor ?? '#2F2F2F',
      borderWidth: props.borderWidth ?? 1,
    },
    emptyContent: {
      borderColor: props.emptyBorderColor ?? customColor.gray50,
      borderWidth: props.borderWidth ?? 1,
    },
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    font: {
      fontSize: props.fontSize ?? 14,
      fontFamily: props.isRegular ? customFont.regular : customFont.bold,
      color: props.isColor ? 'white' : props.backgroundColor,
    },
  });
}
