import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import config from '../../../apikey';
import axios from 'axios';
import {BetweenItem} from './MapScheduleType';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from '../../style/schedule/MapScheduleStyle';
import {customColor} from '../../style/common/CommonStyle';
import LocationDetail from '../common/LocationDetail';

export default function MapSchedule() {
  const travelSchedule = [
    {
      date: '12/21',
      coordinates: [
        {name: '제주공항', latitude: 33.5070537, longitude: 126.492776},
        {name: '연돈', latitude: 33.2592174, longitude: 126.4057641},
        {name: '오설록 티 뮤지엄', latitude: 33.3058932, longitude: 126.289534},
      ],
    },
    {
      date: '12/22',
      coordinates: [
        {name: '제주공항', latitude: 33.5070537, longitude: 126.492776},
        {name: '연돈', latitude: 33.2592174, longitude: 126.4057641},
        {name: '오설록 티 뮤지엄', latitude: 33.3058932, longitude: 126.289534},
      ],
    },
  ];

  const [between, setBetween] = useState<BetweenItem[]>([]);

  const apiKey = config.MAP_API_KEY;

  const calTime = (duration: number) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    if (hours === 0) {
      return `${minutes}분`;
    } else if (minutes === 0) {
      return `${hours}시간`;
    } else {
      return `${hours}시간 ${minutes}분`;
    }
  };

  useEffect(() => {
    const fetchDirections = async () => {
      for (let i = 0; i < travelSchedule.length; i++) {
        for (let j = 0; j < travelSchedule[i].coordinates.length - 1; j++) {
          try {
            const response = await axios.get(
              `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&mode=transit&origins=${
                travelSchedule[i].coordinates[j].latitude
              },${travelSchedule[i].coordinates[j].longitude}&destinations=${
                travelSchedule[i].coordinates[j + 1].latitude
              },${
                travelSchedule[i].coordinates[j + 1].longitude
              }&key=${apiKey}`,
            );

            const distance = JSON.stringify(
              response.data.rows[0].elements[0].distance.text,
            ).replace(/"/g, '');

            const duration = Number(
              JSON.stringify(response.data.rows[0].elements[0].duration.value),
            );

            const time = calTime(duration);

            setBetween(prevBetween => [
              ...prevBetween,
              {distance: distance, time: time},
            ]);

            console.log(`거리는 ${distance} 소요됩니다.`);
            console.log(`거리는 ${time} 소요됩니다.`);
          } catch (error) {
            console.error(error);
          }
        }
      }
    };

    fetchDirections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dateSplit = (date: string): [string, string] => {
    const [month, day] = date.split('/');
    return [month, day];
  };

  return (
    <View style={styles.mapScheduleBox}>
      {travelSchedule.map((daySchedule, index) => (
        <View key={index} style={styles.dayScheduleBox}>
          <Text style={styles.dateText}>
            {dateSplit(daySchedule.date)[0]}/
            <Text style={styles.dateInText}>
              {dateSplit(daySchedule.date)[1]}
            </Text>
          </Text>
          {daySchedule.coordinates.map((coordinate, coordIndex) => (
            <View key={coordIndex}>
              <LocationDetail locationName={coordinate.name} />
              {coordIndex < daySchedule.coordinates.length - 1 ? (
                <View style={styles.distanceContainer}>
                  <View style={styles.distanceIcon}>
                    <AntDesign
                      name="caretdown"
                      color={customColor.lightGreen}
                      size={10}
                    />
                  </View>
                  <View style={styles.line} />
                  <Text style={styles.distanceText}>
                    {between[coordIndex]?.distance}, 차로{' '}
                    {between[coordIndex]?.time} 소요
                  </Text>
                </View>
              ) : null}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
