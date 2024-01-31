import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../../style/community/PostTravelStyle';

export default function PostTravel() {
  return (
    <View style={styles.travelContainer}>
      <Text style={styles.travelTitle}>닉네임 님의 일정보기</Text>
    </View>
  );
}
