import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../../style/common/PageHeaderStyles';
import Entypo from 'react-native-vector-icons/FontAwesome6';
import {useNavi} from '../navigation/useNavi';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function PageHeader({
  page,
  title,
  isBack,
}: {
  page: string;
  title: string;
  isBack?: boolean;
}) {
  const navigation = useNavi();

  return (
    <View>
      <View style={styles.titleContainer}>
        {isBack !== false ? (
          <Fontisto
            style={styles.backIcon}
            name="arrow-left-l"
            color="black"
            size={16}
            onPress={navigation.goBack}
          />
        ) : null}
        <Text style={styles.titleText}>{title}</Text>
        {page === 'List' ? (
          <Entypo
            style={styles.writingIcon}
            name="pencil"
            color="black"
            size={16}
            onPress={() => navigation.navigate('Posting' as never)}
          />
        ) : null}
      </View>
    </View>
  );
}
