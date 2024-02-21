import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Calculate, Community, Travel} from './index';
import {Image, Text, View} from 'react-native';

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

const baseRoute = '../../assets/images/bottomnav/';

function getIcon(name: string, focused: boolean) {
  if (name === homeName) {
    if (focused) {
      return require(`${baseRoute}home_focused.png`);
    } else {
      return require(`${baseRoute}home.png`);
    }
  } else if (name === travelName) {
    if (focused) {
      return require(`${baseRoute}schedule_focused.png`);
    } else {
      return require(`${baseRoute}schedule.png`);
    }
  } else if (name === calculateName) {
    if (focused) {
      return require(`${baseRoute}calculator_focused.png`);
    } else {
      return require(`${baseRoute}calculator.png`);
    }
  } else if (name === communityName) {
    if (focused) {
      return require(`${baseRoute}community_focused.png`);
    } else {
      return require(`${baseRoute}community.png`);
    }
  }
}

const getTabBarIcon = (routeName: string, focused: boolean) => {
  const iconImg = getIcon(routeName, focused);
  const color = focused ? '#007AFF' : '#777777';

  return (
    <View style={{alignItems: 'center', paddingVertical: 8}}>
      <Image source={iconImg} />
      <Text style={{fontSize: 9, letterSpacing: 0.16, color: color}}>
        {routeName}
      </Text>
    </View>
  );
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
