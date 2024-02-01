import React from 'react';
import {Text, Pressable, View} from 'react-native';
import {userStyles} from '../../style/user/UserStyles';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
  route: string;
};

export default function PressableSmallText(props: Props) {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable onPress={() => navigation.navigate(props.route as never)}>
        <Text style={userStyles.pressableSmallText}>{props.title}</Text>
      </Pressable>
    </View>
  );
}
