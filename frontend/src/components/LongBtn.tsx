import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../style/common/LongBtnStyles';

type BtnContent = {
  msg: string;
  route: String;
  color: boolean;
};

export default function LongBtn(props: BtnContent) {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        props.color ? styles.colored : styles.outlined,
      ]}>
      <Pressable
        onPress={() => navigation.navigate(props.route as never)}
        style={styles.button}>
        <Text
          style={[
            styles.font,
            props.color ? {color: 'white'} : {color: '#2F2F2F'},
          ]}>
          {props.msg}
        </Text>
      </Pressable>
    </View>
  );
}
