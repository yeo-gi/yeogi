import {StyleSheet} from 'react-native';
import {customColor, customFont} from '../common/CommonStyle';

export const userStyles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontFamily: customFont.bold,
    textAlign: 'left',
    width: '100%',
    color: 'black',
    marginBottom: 31,
  },
  title: {
    fontSize: 14,
    fontFamily: customFont.bold,
    color: customColor.softBlack,
    marginBottom: 6,
  },
  pressableSmallText: {
    fontSize: 10,
    color: customColor.gray50,
  },
});
