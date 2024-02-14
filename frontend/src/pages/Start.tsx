import {
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {styles as CommonStyles} from '../style/common/BasicContainerStyles';
import NavigateBtn from '../components/common/NavigateBtn';
import {windowHeight} from '../hooks/Dimensions';
import CustomCarousel from '../components/common/CustomCarousel';
import TextWithIconBtn from '../components/common/TextWithIconBtn';

export default function Start() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[CommonStyles.container, styles.container]}>
      <View style={{flexDirection: 'row'}}>
        <TextWithIconBtn
          text="비용 정산하기"
          icon="money-bills"
          isEntypo={true}
          page="Login"
          iconSize={16}
        />
        <TextWithIconBtn
          text="일행찾기"
          icon="person-circle-check"
          isEntypo={true}
          page="Login"
          iconSize={18}
        />
      </View>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/yeogi.png')}
          height={Math.round(windowHeight * 0.23)}
          style={styles.image}
        />
      </TouchableOpacity>
      <CustomCarousel />
      <NavigateBtn msg="로그인" route="Login" isColor={true} marginBottom={7} />
      <NavigateBtn msg="회원가입" route="Signup" isColor={false} />
      <NavigateBtn msg="장소검색" route="LocationSearch" isColor={false} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Math.round(61 - (StatusBar.currentHeight ?? 24)),
  },
  image: {
    height: Math.round(windowHeight * 0.23),
    width: 'auto',
    marginBottom: 30,
  },
});
