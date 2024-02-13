import {StyleSheet} from 'react-native';
import {customColor, customFont} from './CommonStyle';

export const styles = StyleSheet.create({
  locationContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  locationIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: customColor.lightGreen,
    height: 19,
    width: 19,
    borderRadius: 25,
    marginRight: 8,
  },
  locationText: {
    fontSize: 12,
    fontFamily: customFont.regular,
    color: 'black',
  },
});
