import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  colored: {
    width: '100%',
    height: 49,
    backgroundColor: '#2F2F2F',
    borderRadius: 10,
  },
  outlined: {
    width: '100%',
    height: 49,
    borderColor: '#2F2F2F',
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coloredFont: {
    fontSize: 14,
    fontFamily: 'Pretendard-Bold',
    color: 'white',
  },
  oulinedFont: {
    fontSize: 14,
    fontFamily: 'Pretendard-Bold',
    color: '#2F2F2F',
  },
});
