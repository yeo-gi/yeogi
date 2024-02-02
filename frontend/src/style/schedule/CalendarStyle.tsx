import {StyleSheet} from 'react-native';
import {customFont} from '../common/CommonStyle';

export const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: 20,
    paddingLeft: 10,
  },
  titleText: {
    fontSize: 22,
    fontFamily: customFont.bold,
    color: 'black',
  },
  subTitleText: {
    fontSize: 10,
    fontFamily: customFont.regular,
    color: '#282828',
  },
});
