import {StyleSheet} from 'react-native';

export const customColor = {
  softBlack: '#2F2F2F',
  gray20: '#CCCCCC',
  gray30: '#D9D9D9',
  gray40: '#B2B2B2',
  gray50: '#999999',
  blue: '#007AFF',
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
