import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../../style/common/LocationDetailStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LocationDetail({locationName}: {locationName: string}) {
  return (
    <View style={styles.locationContainer}>
      <View style={styles.locationIcon}>
        <Ionicons name="location-outline" color={'white'} size={15} />
      </View>
      <Text style={styles.locationText}>{locationName}</Text>
    </View>
  );
}
