import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {CommonType} from '../../types/CommonType';
import Home from '../Home';
import Login from '../user/Login';

export default function StackNavigation() {
  const Stack = createStackNavigator<CommonType.RootStackPageList>();

  const homeName: string = '홈화면';
  const loginName: string = '로그인';

  const customStackNavigationOptions: StackNavigationOptions = {
    gestureEnabled: false,
    title: '',
    headerStyle: {
      backgroundColor: '#209bec',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  return (
    <Stack.Navigator
      initialRouteName={homeName}
      screenOptions={customStackNavigationOptions}>
      <Stack.Screen name={homeName} component={Home} />
      <Stack.Screen name={loginName} component={Login} />
    </Stack.Navigator>
  );
}
