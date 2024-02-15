import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../style/common/BasicContainerStyles';
import HomeImage from '../components/home/HomeImage';
import RoundedBtn from '../components/common/RoundedBtn';

export default function Home() {
  return (
    <View>
      <HomeImage />
      <View style={styles.container}>
        <Text>Home</Text>
        <RoundedBtn
          msg="시작페이지"
          page="Start"
          isColor={true}
          marginBottom={7}
        />
      </View>
    </View>
  );
}
