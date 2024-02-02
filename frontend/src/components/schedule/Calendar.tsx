import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../../style/schedule/CalendarStyle';
import SelectCalendar from './SelectCalendar';

export default function Calendar() {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>일정 선택하기</Text>
        <Text style={styles.subTitleText}>원하는 여행날짜를 선택해주세요</Text>
      </View>
      <SelectCalendar />
    </View>
  );
}
