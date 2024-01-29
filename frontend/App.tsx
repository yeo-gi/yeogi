import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavTheme} from './src/style/NavTheme';
import StackNavigation from './src/components/navigation/StackNavigation';

export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer theme={NavTheme}>
      <StackNavigation />
    </NavigationContainer>
    // </Provider>
  );
}
