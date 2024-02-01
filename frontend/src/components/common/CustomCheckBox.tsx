import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, View, ViewStyle, Text} from 'react-native';
import {customColor} from '../../style/common/CommonStyle';
import {userStyles} from '../../style/user/UserStyles';
import Entypo from 'react-native-vector-icons/FontAwesome6';

type CheckContent = {
  isChecked: boolean;
  disabled?: boolean;
  onValueChangeHandler?: (checked: boolean) => void;
  onPress?: () => void;
  children?: React.ReactNode;
  style?: ViewStyle;
  title?: string;
  isBlue?: boolean;
  marginRight?: number;
};

export default function CustomCheckBox(props: CheckContent) {
  const onPressedHandler = () => {
    if (props.onValueChangeHandler) {
      props.onValueChangeHandler(!props.isChecked);
    }
  };

  const styles = Styles({
    isBlue: props.isBlue,
    marginRight: props.marginRight,
  });
  const [checkColor, setCheckcolor] = useState('white');

  useEffect(() => {
    if (!props.isChecked || props.isBlue === true) {
      setCheckcolor('white');
    } else {
      setCheckcolor('black');
    }
  }, [props.isChecked, props.isBlue]);

  return (
    <View style={styles.container}>
      <Pressable
        disabled={props.disabled}
        onPress={props.onValueChangeHandler ? onPressedHandler : props.onPress}
        style={[styles.checkbox, props.isChecked && styles.checked]}>
        <Entypo name="check" color={checkColor} />
      </Pressable>
      <Text style={[userStyles.title, {marginLeft: 9}]}>{props.title}</Text>
    </View>
  );
}

type Props = {
  isBlue?: boolean;
  marginRight?: number;
};

function Styles(props: Props) {
  const color = props.isBlue ? customColor.blue : null;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginRight: props.marginRight ?? 0,
    },
    checkbox: {
      height: 18,
      width: 18,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderColor: color ?? customColor.gray30,
      borderWidth: 1,
      borderRadius: 2,
    },
    checked: {
      backgroundColor: color ?? customColor.gray30,
      borderColor: color ?? customColor.gray30,
    },
    label: {
      marginLeft: 8,
    },
  });
}
