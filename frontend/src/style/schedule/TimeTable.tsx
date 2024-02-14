import {StyleSheet} from 'react-native';
import {customColor, customFont} from '../common/CommonStyle';

export const styles = StyleSheet.create({
  timeTableBox: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  dayScheduleBox: {
    marginBottom: 10,
  },
  dateText: {
    fontSize: 12,
    fontFamily: customFont.regular,
    color: 'black',
    marginBottom: 9,
  },
  dateInText: {
    color: customColor.blue,
    fontFamily: customFont.semiBold,
    fontSize: 16,
  },
  planContainer: {
    flexDirection: 'row',
  },
  timeContainer: {
    flexDirection: 'row',
    marginBottom: 9,
    alignItems: 'center',
    width: 100,
  },
  timeIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: customColor.blue,
    height: 18,
    width: 18,
    borderRadius: 25,
    marginRight: 8,
  },
  timeText: {
    fontSize: 12,
    fontFamily: customFont.regular,
    color: 'black',
  },
  descContainer: {
    backgroundColor: customColor.lightYellow,
    marginBottom: 10,
    marginLeft: 23,
    marginRight: 15,
  },
  descText: {
    fontSize: 10,
    color: 'black',
    fontFamily: customFont.regular,
    padding: 9,
  },
  line: {
    position: 'absolute',
    left: 7.5,
    top: 18,
    bottom: 0,
    width: 3,
    height: 18,
    backgroundColor: customColor.blue,
  },
  descLine: {
    position: 'absolute',
    left: 7.5,
    top: 8,
    bottom: 0,
    width: 3,
    height: 27,
    backgroundColor: customColor.blue,
    borderBottomEndRadius: 8,
    borderBottomLeftRadius: 8,
  },
  topLine: {
    position: 'absolute',
    left: 7.5,
    top: -17,
    bottom: 0,
    width: 3,
    height: 18,
    backgroundColor: customColor.blue,
  },
});
