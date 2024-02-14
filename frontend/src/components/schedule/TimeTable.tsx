import {View, Text} from 'react-native';
import React from 'react';
import LocationDetail from '../common/LocationDetail';
import {styles} from '../../style/schedule/TimeTable';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TimeTable() {
  const travelSchedule = [
    {
      date: '12/21',
      coordinates: [
        {
          name: '제주공항',
          latitude: 33.5070537,
          longitude: 126.492776,
          time: 'AM 8:00',
          description: '어쩌고저쩌고내용입니다',
        },
        {
          name: '연돈',
          latitude: 33.2592174,
          longitude: 126.4057641,
          time: 'AM 8:00',
          description: '',
        },
        {
          name: '오설록 티 뮤지엄',
          latitude: 33.3058932,
          longitude: 126.289534,
          time: 'AM 8:00',
          description: '어쩌고저쩌고내용입니다',
        },
      ],
    },
    {
      date: '12/22',
      coordinates: [
        {
          name: '제주공항',
          latitude: 33.5070537,
          longitude: 126.492776,
          time: 'AM 8:00',
          description: '',
        },
        {
          name: '연돈',
          latitude: 33.2592174,
          longitude: 126.4057641,
          time: 'AM 8:00',
          description:
            '어쩌고저쩌고내용입니다어쩌고저쩌고내용입니다어쩌고저쩌고내용입니다어쩌고저쩌고내용입니다어쩌고저쩌고내용입니다어쩌고저쩌고',
        },
        {
          name: '오설록 티 뮤지엄',
          latitude: 33.3058932,
          longitude: 126.289534,
          time: 'AM 8:00',
          description: '',
        },
      ],
    },
  ];

  const dateSplit = (date: string): [string, string] => {
    const [month, day] = date.split('/');
    return [month, day];
  };

  return (
    <View style={styles.timeTableBox}>
      {travelSchedule.map((daySchedule, index) => (
        <View key={index} style={styles.dayScheduleBox}>
          <Text style={styles.dateText}>
            {dateSplit(daySchedule.date)[0]}/
            <Text style={styles.dateInText}>
              {dateSplit(daySchedule.date)[1]}
            </Text>
          </Text>
          {daySchedule.coordinates.map((coordinate, coordIndex) => (
            <View>
              <View>
                <View key={coordIndex} style={styles.planContainer}>
                  <View style={styles.timeContainer}>
                    <View style={styles.timeIcon}>
                      <Ionicons name="time-outline" color={'white'} size={15} />
                    </View>
                    <Text style={styles.timeText}>{coordinate.time}</Text>
                  </View>
                  <LocationDetail locationName={coordinate.name} />
                </View>
                {coordIndex > 0 &&
                daySchedule.coordinates[coordIndex - 1].description ? (
                  <View style={styles.topLine} />
                ) : null}
                {coordinate.description ? (
                  <View>
                    <View style={styles.descContainer}>
                      <Text style={styles.descText} numberOfLines={1}>
                        {coordinate.description}
                      </Text>
                    </View>
                    <View style={styles.descLine} />
                  </View>
                ) : null}
                {coordIndex === daySchedule.coordinates.length - 1 &&
                !coordinate.description ? null : (
                  <View style={styles.line} />
                )}
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
