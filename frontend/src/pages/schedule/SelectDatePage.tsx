import {View} from 'react-native';
import React from 'react';
import CommunityHeader from '../../components/common/PageHeader';
import {styles} from '../../style/schedule/SelectDateStyle';
import Calendar from '../../components/schedule/Calendar';

export default function SelectDatePage() {
  const page = 'Schedule';
  const title = '일정관리';

  return (
    <View style={styles.dateContainer}>
      <CommunityHeader page={page} title={title} />
      <Calendar />
    </View>
  );
}
