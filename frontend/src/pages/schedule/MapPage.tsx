import React from 'react';
import {ScrollView} from 'react-native';
import CustomMapView from '../../components/map/MapView';
import MapSchedule from '../../components/map/MapSchedule';

export default function MapPage() {
  return (
    <ScrollView>
      <CustomMapView />
      <MapSchedule />
    </ScrollView>
  );
}
