import {Dimensions, StyleSheet} from 'react-native';

const screenHeight = Dimensions.get('window').height;

const contentHeight = screenHeight - 155;

export const styles = StyleSheet.create({
  container: {
    height: contentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
