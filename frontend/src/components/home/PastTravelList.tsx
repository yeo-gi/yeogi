import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {styles as homeStyles} from '../../style/home/HomeStyle';

// 임시 데이터
const datas = [
  {
    img: '../../assets/images/empty.png',
    title: '지난 여행',
    desc: '지난 지난 여행 여행',
  },
  {
    img: '../../assets/images/empty.png',
    title: '지난 여행',
    desc: '지난 지난 여행 여행',
  },
];

const contents = datas.map(data => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: 18,
    },
    img: {
      borderRadius: 10,
      width: 40,
      height: 40,
      marginRight: 9,
    },
    title: {
      color: 'black',
      fontSize: 16,
      letterSpacing: 0.35,
    },
    desc: {
      color: '#999999',
      fontSize: 12,
      letterSpacing: 0.35,
    },
    line: {
      borderTopWidth: 0.5,
      borderTopColor: '#CCCCCC',
      height: 0.5,
      marginHorizontal: 8,
    },
  });

  return (
    <View>
      <Pressable style={styles.container}>
        <Image
          source={require('../../assets/images/empty.png')}
          style={styles.img}
        />
        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.desc}>{data.desc}</Text>
        </View>
      </Pressable>
      <View style={styles.line} />
    </View>
  );
});

export default function PastTravelList() {
  return (
    <View>
      <Text style={homeStyles.title}>지난 여행을 돌아보세요!</Text>
      <View style={styles.container}>{contents}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: '#CCCCCC',
    borderWidth: 0.5,
    marginTop: 18,
  },
});
