import {
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles as CommonStyles} from '../style/common/BasicContainerStyles';
import {windowHeight} from '../hooks/Dimensions';
import CustomCarousel from '../components/common/CustomCarousel';
import RoundedBtn from '../components/common/RoundedBtn';

export default function Start() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[CommonStyles.container, styles.container]}>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/yeogi.png')}
          height={Math.round(windowHeight * 0.23)}
          style={styles.image}
        />
      </TouchableOpacity>
      <CustomCarousel />
      <RoundedBtn msg="로그인" page="Login" isColor={true} marginBottom={7} />
      <RoundedBtn msg="회원가입" page="Signup" isColor={false} />
      <RoundedBtn msg="장소검색" page="LocationSearch" isColor={false} />
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
