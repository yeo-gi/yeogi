import {View, ScrollView} from 'react-native';
import React from 'react';
import {styles as commonStyles} from '../style/common/BasicContainerStyles';
import HomeImage from '../components/home/HomeImage';
import RoundedBtn from '../components/common/RoundedBtn';
import MDRecommended from '../components/home/MDRecommended';
import IconBtnBar from '../components/home/IconBtnBar';
import PastTravelList from '../components/home/PastTravelList';

export default function Home() {
  return (
    <ScrollView>
      <HomeImage />
      <View style={{marginHorizontal: 25}}>
        <IconBtnBar />
        <MDRecommended />
        <PastTravelList />
      </View>

      {/* 임시 */}
      <View style={commonStyles.container}>
        <RoundedBtn
          msg="시작페이지"
          page="Start"
          isColor={true}
          marginBottom={7}
        />
      </View>
    </ScrollView>
  );
}
