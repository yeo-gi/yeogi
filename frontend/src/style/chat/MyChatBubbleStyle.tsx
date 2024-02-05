import {StyleSheet} from 'react-native';
import {customFont} from '../common/CommonStyle';

export const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginLeft: '20%',
    alignItems: 'flex-end',
    marginVertical: 7.5,
  },
  bubbleText: {
    fontFamily: customFont.regular,
    backgroundColor: '#4399FF',
    color: 'black',
    fontSize: 11,
    padding: 10,
    // borderWidth: 1,
    // borderColor: '#4399FF',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
});
