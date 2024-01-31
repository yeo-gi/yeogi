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
  },
  title: {
    fontFamily: customFont.medium,
    fontSize: 13,
    color: 'black',
    paddingBottom: 5,
  },
  nickname: {
    fontSize: 6,
    paddingRight: 3,
  },
  updatedDate: {
    fontSize: 6,
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
