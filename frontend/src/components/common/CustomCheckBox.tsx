import React from 'react';
import {Pressable, StyleSheet, View, ViewStyle, Text} from 'react-native';
import {customColor} from '../../style/common/CommonStyle';
import {userStyles} from '../../style/user/UserStyles';
import Entypo from 'react-native-vector-icons/FontAwesome6';

type CheckContent = {
  isChecked: boolean;
  disabled?: boolean;
  onValueChangeHandler?: (checked: boolean) => void;
  children?: React.ReactNode;
  style?: ViewStyle;
  title?: string;
};

export default function CustomCheckBox(props: CheckContent) {
  const onPressedHandler = () => {
    if (props.onValueChangeHandler) {
      props.onValueChangeHandler(!props.isChecked);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        disabled={props.disabled}
        onPress={onPressedHandler}
        style={[styles.checkbox, props.isChecked && styles.checked]}>
        <Entypo name="check" color={props.isChecked ? 'black' : 'white'} />
      </Pressable>
      <Text style={[userStyles.title, {marginLeft: 9}]}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  checkbox: {
    height: 18,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: customColor.gray30,
    borderWidth: 1,
  },
  checked: {
    backgroundColor: customColor.gray30,
    borderColor: customColor.gray30,
  },
  label: {
    marginLeft: 8,
  },
});
