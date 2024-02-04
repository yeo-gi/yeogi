import {StyleSheet} from 'react-native';

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
    position: 'absolute',
    left: 10,
  },
  writingIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
  },
  titleText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Pretendard-Medium',
  },
});
