import {View, Text} from 'react-native';
import React from 'react';
import {useNavi} from '../components/navigation/useNavi';

export default function Travel() {
  const navigation = useNavi();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Travel</Text>
      <Text onPress={() => navigation.navigate('Map')}>지도ㅎㅎ</Text>
    </View>
  );
}
