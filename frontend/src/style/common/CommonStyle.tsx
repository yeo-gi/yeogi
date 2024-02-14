import {StyleSheet} from 'react-native';

export const customColor = {
  softBlack: '#2F2F2F',
  gray10: '#E1E0F1',
  gray20: '#CCCCCC',
  gray30: '#D9D9D9',
  gray40: '#B2B2B2',
  gray50: '#999999',
  gray70: '#50555C',
  blue: '#007AFF',
  red: '#F93535',
  lightViolet: '#E1E0F1',
  lightGreen: '#71C703',
  lightYellow: '#FFF9C7',
};

export const customFont = {
  regular: 'Pretendard-Regular',
  medium: 'Pretendard-Medium',
  semiBold: 'Pretendard-SemiBold',
  bold: 'Pretendard-Bold',
};

export const commonStyles = StyleSheet.create({
  rowCenterContents: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
