import {Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CalendarList} from 'react-native-calendars';
import {styles} from '../../style/schedule/SelectCalendarStyle';
import {windowWidth} from '../../hooks/Dimensions';
import {customColor, customFont} from '../../style/common/CommonStyle';
import {DefaultText} from '../../style/DefaultText';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/Store';
import {addSchedule} from '../../store/ScheduleSlice';
import {useNavi} from '../navigation/useNavi';

type DayType = {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
};

export default function SelectCalendar() {
  const schedule = useSelector((state: RootState) => state.schedule.schedule);
  const [pointCalendarDates, setPointCalendarDates] = useState({});
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const dispatch = useDispatch();
  const navigation = useNavi();

  useEffect(() => {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    setPointCalendarDates(prevDates => ({
      ...prevDates,
      [todayString]: {marked: true, dotColor: customColor.blue},
    }));
  }, []);

  useEffect(() => {
    const generateMarkedDates = (): {
      [date: string]: any;
    } => {
      const result: {
        [date: string]: any;
      } = {};

      const today = new Date();
      const todayString = today.toISOString().split('T')[0];
      result[todayString] = {marked: true, dotColor: customColor.blue};

      if (startDate && endDate) {
        let currentDate = new Date(startDate);

        while (currentDate <= new Date(endDate)) {
          const dateString = currentDate.toISOString().split('T')[0];
          if (dateString === startDate) {
            result[dateString] = {
              selected: true,
              startingDay: true,
              color: customColor.blue,
            };
          } else if (dateString === endDate) {
            result[dateString] = {
              selected: true,
              endingDay: true,
              color: customColor.blue,
            };
          } else {
            result[dateString] = {selected: true, color: customColor.blue};
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }

      const selectedDateStrings = Object.keys(result);

      dispatch(addSchedule(selectedDateStrings));
      setPointCalendarDates(result);

      console.log('startDate:', startDate);
      console.log('endDate:', endDate);
      console.log('선택한 기간:', result);
      console.log('날짜만:', selectedDateStrings);

      return result;
    };

    generateMarkedDates();
  }, [startDate, endDate, dispatch]);

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
      <View style={styles.dayName}>
        <DefaultText style={styles.day}>S</DefaultText>
        <DefaultText style={styles.day}>M</DefaultText>
        <DefaultText style={styles.day}>T</DefaultText>
        <DefaultText style={styles.day}>W</DefaultText>
        <DefaultText style={styles.day}>T</DefaultText>
        <DefaultText style={styles.day}>F</DefaultText>
        <DefaultText style={styles.day}>S</DefaultText>
      </View>
      <View style={styles.calendarlist}>
        <CalendarList
          calendarWidth={windowWidth - 50}
          scrollEnabled={true}
          enableSwipeMonths={true}
          monthFormat={'yyyy년 M월'}
          markingType={'period'}
          onDayPress={dayPress}
          hideDayNames={true}
          markedDates={pointCalendarDates}
          theme={{
            dayTextColor: 'black',
            // calendarBackground: customColor.gray30,
            textDayFontFamily: customFont.regular,
            textDayHeaderFontWeight: '600',
            textMonthFontFamily: customFont.regular,
            textDayHeaderFontFamily: customFont.regular,
            textDayHeaderFontSize: 14,
            textDayFontSize: 16,
            textDayFontWeight: '400',
            textMonthFontWeight: '600',
          }}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={navigation.goBack}>
          <View style={styles.cancelBtn}>
            <Text style={styles.cancelText}>취소</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.selectBtn}>
            <Text style={styles.selectText}>선택</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
