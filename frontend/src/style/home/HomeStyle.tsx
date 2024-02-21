import {StyleSheet} from 'react-native';
import {windowWidth} from '../../hooks/Dimensions';
import {customFont} from '../common/CommonStyle';

export const styles = StyleSheet.create({
  image: {
    width: windowWidth,
    height: 156,
    marginVertical: 22,
  },
  title: {
    fontSize: 22,
    letterSpacing: 0.35,
    lineHeight: 28,
    fontFamily: customFont.bold,
    color: 'black',
  },
});
