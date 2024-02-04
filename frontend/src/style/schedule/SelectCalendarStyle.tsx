import {StyleSheet} from 'react-native';
// import {customColor} from '../common/CommonStyle';
import {windowHeight} from '../../hooks/Dimensions';
import {customColor, customFont} from '../common/CommonStyle';

export const styles = StyleSheet.create({
  calendarContainer: {
    // height: '80%',
    height: windowHeight - 300,
  },
  calendarlist: {
    borderBottomWidth: 0.5,
    borderColor: customColor.gray20,
  },
  dayName: {
    height: 47,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: customColor.gray30,
  },
  day: {
    fontSize: 16,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginTop: 15,
  },
  cancelBtn: {
    height: 40,
    padding: 10,
    marginRight: 10,
  },
  cancelText: {
    fontFamily: customFont.medium,
    fontSize: 14,
    color: 'black',
  },
  selectBtn: {
    height: 40,
    padding: 10,
  },
  selectText: {
    fontFamily: customFont.medium,
    fontSize: 14,
    color: 'black',
  },
});
