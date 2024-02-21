import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {styles as homeStyles} from '../../style/home/HomeStyle';

// 임시 데이터
const datas = [
  {
    img: '../../assets/images/empty.png',
    name: '광주',
  },
  {
    img: '../../assets/images/empty.png',
    name: '수원',
  },
  {
    img: '../../assets/images/empty.png',
    name: '서울',
  },
];

const contents = datas.map(data => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginRight: 15,
    },
    img: {
      width: 85,
      height: 85,
      borderRadius: 100,
      marginBottom: 11,
    },
    name: {
      color: 'black',
    },
  });

  return (
    <Pressable style={styles.container}>
      <Image
        source={require('../../assets/images/empty.png')}
        style={styles.img}
      />
      {/* <Image source={{uri: data.img}} /> */}
      <Text style={styles.name}>{data.name}</Text>
    </Pressable>
  );
});

export default function MDRecommended() {
  return (
    <View style={{marginBottom: 31}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={homeStyles.title}>여기MD가 추천하는 여행지</Text>
        <Text style={{fontSize: 17, color: 'black'}}>✈️</Text>
      </View>
      <ScrollView horizontal style={{marginTop: 20}}>
        {contents}
      </ScrollView>
    </View>
  );
}
