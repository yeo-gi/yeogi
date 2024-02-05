import {StyleSheet} from 'react-native';
import {customFont} from '../common/CommonStyle';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    alignItems: 'flex-end',
    marginVertical: 7.5,
    marginRight: '30%',
    flexDirection: 'row',
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
    borderBottomLeftRadius: 0,
  },
  image: {
    height: 24,
    width: 24,
    borderRadius: 50,
    marginRight: 5,
  },
});
