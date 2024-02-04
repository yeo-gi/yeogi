import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../style/common/BasicContainerStyles';
import NavigateBtn from '../components/common/NavigateBtn';
import HomeImage from '../components/home/HomeImage';

export default function Home() {
  return (
    <View>
      <HomeImage />
      <View style={styles.container}>
        <Text>Home</Text>
        <NavigateBtn
          msg="시작페이지"
          route="Start"
          isColor={true}
          marginBottom={7}
        />
      </View>
    </View>
  );
}
