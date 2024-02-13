import {View} from 'react-native';
import React from 'react';
import {styles} from '../../style/schedule/SelectDateStyle';
import Calendar from '../../components/schedule/Calendar';
import PageHeader from '../../components/common/PageHeader';

export default function SelectDatePage() {
  const page = 'Schedule';
  const title = '일정관리';

  return (
    <View style={styles.dateContainer}>
      <PageHeader page={page} title={title} />
      <Calendar />
    </View>
  );
}
