import React from 'react';
// import {View} from 'react-native';
import BottomNav from './src/components/bottomnav/BottomNav';
import {NavigationContainer} from '@react-navigation/native';
// import {store} from './src/store/store';
// import {Provider} from 'react-redux';
import {NavTheme} from './src/style/NavTheme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostingPage from './src/pages/community/PostingPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer theme={NavTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Posting"
          component={PostingPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}
