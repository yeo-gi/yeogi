import {StyleSheet} from 'react-native';
import {customColor, customFont} from '../common/CommonStyle';

export const styles = StyleSheet.create({
  mapScheduleBox: {
    marginHorizontal: 15,
  },
  dayScheduleBox: {
    marginBottom: 10,
  },
  dateText: {
    fontSize: 12,
    fontFamily: customFont.regular,
    color: 'black',
    marginBottom: 10,
  },
  dateInText: {
    color: customColor.blue,
    fontFamily: customFont.semiBold,
    fontSize: 16,
  },
  distanceContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  distanceIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 18,
    width: 18,
    marginRight: 8,
  },
  distanceText: {
    fontSize: 10,
    fontFamily: customFont.regular,
    color: customColor.lightGreen,
  },
  line: {
    position: 'absolute',
    left: 7.5,
    top: -11,
    bottom: 0,
    width: 3,
    height: 40,
    backgroundColor: customColor.lightGreen,
  },
});
