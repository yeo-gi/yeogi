import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavTheme} from './src/style/NavTheme';
import StackNavigation from './src/components/navigation/StackNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store/Store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={NavTheme}>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
