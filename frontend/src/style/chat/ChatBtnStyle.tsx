import {StyleSheet} from 'react-native';
import {customColor} from '../common/CommonStyle';

export const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    borderWidth: 1.5,
    borderColor: customColor.blue,
    borderRadius: 15,
    marginBottom: 5,
    marginTop: 5,
    marginHorizontal: 10,
  },
  chatInput: {
    marginLeft: 5,
    flex: 9,
  },
  sendBtn: {
    flex: 1,
    alignItems: 'center',
  },
});
