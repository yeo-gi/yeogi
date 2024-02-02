import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../style/home/HomeStyle';
import {useNavi} from '../navigation/useNavi';

export default function HomeImage() {
  const navigation = useNavi();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('SelectDate')}>
      <Image
        source={require('../../assets/images/temp.jpg')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}
