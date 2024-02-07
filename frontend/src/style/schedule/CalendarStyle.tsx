import {StyleSheet} from 'react-native';
import {customFont} from '../common/CommonStyle';

export const styles = StyleSheet.create({
  calendarPage: {},
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
    fontFamily: customFont.regular,
    color: '#282828',
  },
});
