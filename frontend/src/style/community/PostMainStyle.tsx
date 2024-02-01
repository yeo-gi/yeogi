import {StyleSheet} from 'react-native';
import {customColor, customFont} from '../common/CommonStyle';

export const styles = StyleSheet.create({
  titleBox: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: customColor.gray20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: customFont.medium,
    fontSize: 13,
    color: 'black',
    paddingBottom: 5,
  },
  nickname: {
    fontSize: 9,
    paddingRight: 3,
    fontFamily: customFont.regular,
    color: customColor.gray50,
  },
  updatedDate: {
    fontSize: 9,
    fontFamily: customFont.regular,
    color: customColor.gray50,
  },
  contentBox: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderColor: customColor.gray20,
  },
  contentText: {
    fontSize: 11,
    lineHeight: 20,
  },
  chattingIcon: {
    paddingTop: 10,
    textAlign: 'right',
  },
});
