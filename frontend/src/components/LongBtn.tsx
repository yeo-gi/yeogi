import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

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
        <Text style={props.color ? {color: 'white'} : {color: '#2F2F2F'}}>
          {props.msg}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
  font: {
    fontSize: 21,
  },
});
