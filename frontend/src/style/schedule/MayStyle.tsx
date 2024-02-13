import {StyleSheet} from 'react-native';
import {customFont} from '../common/CommonStyle';

export const styles = StyleSheet.create({
  container: {
    height: 245,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 15,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {width: 20, height: 45, resizeMode: 'contain'},
  markerText: {
    color: 'white',
    position: 'absolute',
    top: 8,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: customFont.bold,
  },
});
