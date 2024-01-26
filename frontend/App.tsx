import React from 'react';
// import {View} from 'react-native';
import BottomNav from './src/components/BottomNav';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNav />
    </NavigationContainer>
  );
}
