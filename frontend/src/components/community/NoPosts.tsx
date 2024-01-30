import {View} from 'react-native';
import React from 'react';
import {DefaultText} from '../../style/DefaultText';
import {styles} from '../../style/community/NoPostsStyle';

export default function NoPosts() {
  return (
    <View style={styles.container}>
      <DefaultText>게시글이 없습니다.</DefaultText>
    </View>
  );
}
