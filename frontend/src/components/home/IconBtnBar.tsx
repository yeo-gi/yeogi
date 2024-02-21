import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TextWithIconBtn from '../common/TextWithIconBtn';

export default function IconBtnBar() {
  return (
    <ScrollView horizontal style={styles.TextWithIconBtns}>
      <TextWithIconBtn
        text="비용 정산하기"
        icon="money-bills"
        isEntypo={true}
        page="Login"
        iconSize={14}
      />
      <TextWithIconBtn
        text="일행찾기"
        icon="person-circle-check"
        isEntypo={true}
        page="Login"
        iconSize={16}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  TextWithIconBtns: {
    flexDirection: 'row',
    marginBottom: 26,
  },
});
