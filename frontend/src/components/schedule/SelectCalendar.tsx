import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CalendarList} from 'react-native-calendars';
import {styles} from '../../style/schedule/SelectCalendarStyle';
import {windowWidth} from '../../hooks/Dimensions';
import {customColor, customFont} from '../../style/common/CommonStyle';

type DayType = {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
};

export default function SelectCalendar() {
  const [selectedDates, setSelectedDates] = useState<string[] | null>(null);
  const [pointCalendarDates, setPointCalendarDates] = useState({});
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  useEffect(() => {
    const generateMarkedDates = (): {
      [date: string]: {selected: boolean; marked: boolean};
    } => {
      const result: {[date: string]: {selected: boolean; marked: boolean}} = {};

      if (startDate && endDate) {
        let currentDate = new Date(startDate);

        while (currentDate <= new Date(endDate)) {
          const dateString = currentDate.toISOString().split('T')[0];
          result[dateString] = {selected: true, marked: true};
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }

      const selectedDateStrings = Object.keys(result);

      setSelectedDates(selectedDateStrings);
      setPointCalendarDates(result);

      console.log('startDate:', startDate);
      console.log('endDate:', endDate);
      console.log('선택한 기간:', result);
      console.log('날짜만:', selectedDateStrings);

      return result;
    };

    generateMarkedDates();
  }, [startDate, endDate]);

  const dayPress = (day: DayType) => {
    if (startDate === null && endDate === null) {
      setStartDate(day.dateString);
      setEndDate(day.dateString);
    } else if (startDate === endDate) {
      if (day.dateString === startDate) {
        setStartDate(null);
        setEndDate(null);
      } else {
        setEndDate(day.dateString);
      }
    } else {
      setStartDate(null);
      setEndDate(null);
    }
  };

  return (
    <View style={styles.calendarContainer}>
      <CalendarList
        calendarWidth={windowWidth - 50}
        scrollEnabled={true}
        enableSwipeMonths={true}
        monthFormat={'yyyy년 M월'}
        markingType={'period'}
        onDayPress={dayPress}
        markedDates={pointCalendarDates}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          selectedDayTextColor: customColor.blue,
          selectedDayBackgroundColor: '#eef6ff',
          todayTextColor: '#ffffff',
          todayBackgroundColor: '#6491ff',
          dayTextColor: '#616d82',
          textDisabledColor: '#d9e1e8',
          arrowColor: 'orange',
          textDayFontFamily: customFont.regular,
          textMonthFontFamily: customFont.regular,
          textDayHeaderFontFamily: customFont.regular,
          textDayFontWeight: '400',
          textMonthFontWeight: '600',
        }}
      />
    </View>
  );
}
