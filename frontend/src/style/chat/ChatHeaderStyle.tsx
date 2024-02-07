import {StyleSheet} from 'react-native';
import {customFont} from '../common/CommonStyle';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
  },
  titleContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#CCCCCC',
  },
  backIcon: {
    left: 10,
    marginRight: 30,
  },
  writingIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
  },
  titleText: {
    fontFamily: customFont.medium,
    color: 'black',
    fontSize: 14,
  },
});
