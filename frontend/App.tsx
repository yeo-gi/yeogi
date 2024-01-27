import React from 'react';
// import {View} from 'react-native';
import BottomNav from './src/components/bottomnav/BottomNav';
import {NavigationContainer} from '@react-navigation/native';
// import {store} from './src/store/store';
// import {Provider} from 'react-redux';
import {NavTheme} from './src/style/NavTheme';

export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer theme={NavTheme}>
      <BottomNav />
    </NavigationContainer>
    // </Provider>
  );
}
