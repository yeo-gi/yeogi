import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {styles as BtnStyles} from '../../style/common/RoundedBtnStyles';
import {userStyles} from '../../style/user/UserStyles';
import Entypo from 'react-native-vector-icons/FontAwesome6';

type Props = {
  title: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  marginTop?: number;
  marginBottom?: number;
};

export default function CustomSearchBar(props: Props) {
  return (
    <View
      style={[
        BtnStyles.container,
        {
          marginBottom: props.marginBottom ?? 57,
          marginTop: props.marginTop ?? 0,
        },
      ]}>
      <Text style={userStyles.title}>{props.title}</Text>
      <View
        style={[
          styles.container,
          BtnStyles.container,
          props.text != '' ? BtnStyles.outlined : BtnStyles.emptyContent,
        ]}>
        <TextInput
          style={[{height: '100%'}]}
          onChangeText={props.setText}
          value={props.text}
          placeholder={props.placeholder}
          placeholderTextColor={'#999999'}
        />
        <Entypo
          name="searchengin"
          color={'black'}
          style={{}}
          size={17}
          onPress={() => {
            console.log(`검색어 ${props.text}`);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
