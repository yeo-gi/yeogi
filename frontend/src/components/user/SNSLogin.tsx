import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {customColor} from '../../style/common/CommonStyle';

export default function SNSLogin() {
  return (
    <View style={{marginBottom: 50}}>
      <View style={styles.header}>
        <View style={styles.xLine} />
        <Text style={styles.title}>SNS 로그인</Text>
        <View style={styles.xLine} />
      </View>
      <View style={styles.body}>
        <Pressable style={styles.circle}></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  xLine: {
    height: 1,
    width: '30%',
    borderBottomWidth: 1,
    borderColor: customColor.gray40,
  },
  title: {
    fontSize: 14,
    color: customColor.gray70,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  circle: {
    width: 48,
    height: 48,
    borderColor: customColor.gray10,
    borderWidth: 1,
    borderRadius: 1000,
  },
});
