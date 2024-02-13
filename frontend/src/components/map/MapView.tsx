import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../../style/schedule/MayStyle';
import {customColor} from '../../style/common/CommonStyle';
import MapView, {Marker, Polyline} from 'react-native-maps';

export default function CustomMapView() {
  const coordinates = [
    {latitude: 33.4996, longitude: 126.5312},
    {latitude: 33.3617, longitude: 126.5292},
    {latitude: 33.4344, longitude: 126.3313},
  ];

  const getRegion = () => {
    if (coordinates.length === 0) {
      return {
        latitude: 33.4344,
        longitude: 126.5312,
        latitudeDelta: 0.3,
        longitudeDelta: 0.3,
      };
    } else {
      const minLat = Math.min(...coordinates.map(coord => coord.latitude));
      const maxLat = Math.max(...coordinates.map(coord => coord.latitude));
      const minLng = Math.min(...coordinates.map(coord => coord.longitude));
      const maxLng = Math.max(...coordinates.map(coord => coord.longitude));

      const centerLat = (minLat + maxLat) / 2;
      const centerLng = (minLng + maxLng) / 2;

      const deltaLat = maxLat - minLat + 0.15;
      const deltaLng = maxLng - minLng + 0.15;

      return {
        latitude: centerLat,
        longitude: centerLng,
        latitudeDelta: deltaLat,
        longitudeDelta: deltaLng,
      };
    }
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={getRegion()}>
        {coordinates.map((coordinate, index) => (
          <Marker key={index} coordinate={coordinate} anchor={{x: 0.5, y: 0.8}}>
            <View>
              <Image
                source={require('../../assets/images/marker.png')}
                style={styles.marker}
              />
              <Text style={styles.markerText}>{index + 1}</Text>
            </View>
          </Marker>
        ))}

        {coordinates.length > 1 && (
          <Polyline
            coordinates={coordinates}
            strokeColor={customColor.blue}
            strokeWidth={3}
            lineDashPattern={[5, 2]}
          />
        )}
      </MapView>
    </View>
  );
}
