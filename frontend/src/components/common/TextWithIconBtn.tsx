import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {customColor} from '../../style/common/CommonStyle';

type Props = {
  text: string;
  icon: string;
  page?: string;
  onPress?: () => void;
  isEntypo?: boolean;
  isFontisto?: boolean;
};

export default function TextWithIconBtn(props: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      activeOpacity={0.7}>
      {props.isEntypo ? (
        <Entypo name={props.icon} size={20} style={styles.icon} />
      ) : null}
      {props.isFontisto ? (
        <Fontisto name={props.icon} size={20} style={styles.icon} />
      ) : null}
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
    height: 32,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
    fontSize: 14,
    color: '#1D1B20',
  },
  icon: {
    color: customColor.blue,
  },
});
