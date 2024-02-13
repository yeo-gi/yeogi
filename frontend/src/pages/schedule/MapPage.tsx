import React from 'react';
import {View} from 'react-native';
import CustomMapView from '../../components/map/MapView';
import MapSchedule from '../../components/map/MapSchedule';

export default function MapPage() {
  return (
    <View>
      <CustomMapView />
      <MapSchedule />
    </View>
  );
}
