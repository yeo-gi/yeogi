import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Home, Calculate, Community, Travel} from './index';

const Tab = createBottomTabNavigator();

const homeName: string = '홈화면';
const travelName: string = '일정조회';
const calculateName: string = '비용정산';
const communityName: string = '커뮤니티';

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  position: 'absolute',
  tabBarStyle: {
    bottom: 0,
    height: 50,
    elevation: 0,
  },
};

const getTabBarIcon = (routeName: string, focused: boolean) => {
  let iconName: string = '';

  if (routeName === homeName) {
    iconName = focused ? 'home' : 'home-outline';
  } else if (routeName === travelName) {
    iconName = focused ? 'calendar' : 'calendar-outline';
  } else if (routeName === calculateName) {
    iconName = focused ? 'calculator' : 'calculator-outline';
  } else if (routeName === communityName) {
    iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
  }

  let color = focused ? '#007AFF' : '#D3D3D3';
  let size = 28;

  return <Ionicons name={iconName} color={color} size={size} />;
};

export default function BottomNav() {
  return (
    <Tab.Navigator initialRouteName={homeName} screenOptions={screenOptions}>
      <Tab.Screen
        name={homeName}
        component={Home}
        options={({route}) => ({
          tabBarIcon: ({focused}) => getTabBarIcon(route.name, focused),
        })}
      />
      <Tab.Screen
        name={travelName}
        component={Travel}
        options={({route}) => ({
          tabBarIcon: ({focused}) => getTabBarIcon(route.name, focused),
        })}
      />
      <Tab.Screen
        name={calculateName}
        component={Calculate}
        options={({route}) => ({
          tabBarIcon: ({focused}) => getTabBarIcon(route.name, focused),
        })}
      />
      <Tab.Screen
        name={communityName}
        component={Community}
        options={({route}) => ({
          tabBarIcon: ({focused}) => getTabBarIcon(route.name, focused),
        })}
      />
    </Tab.Navigator>
  );
}
