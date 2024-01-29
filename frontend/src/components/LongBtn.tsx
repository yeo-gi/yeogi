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
    <View style={props.color ? styles.colored : styles.outlined}>
      <Pressable
        onPress={() => navigation.navigate(props.route as never)}
        style={styles.button}>
        <Text style={props.color ? styles.coloredFont : styles.oulinedFont}>
          {props.msg}
        </Text>
      </Pressable>
    </View>
  );
}
