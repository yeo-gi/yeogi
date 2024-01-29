import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  titleContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#CCCCCC',
  },
  writingIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 15,
  },
  titleText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Pretendard-Medium',
  },
});
