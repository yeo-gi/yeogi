import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles as BtnStyles} from '../../style/common/RoundedBtnStyles';
import {userStyles} from '../../style/user/UserStyles';

type InputContent = {
  title: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  isPw: boolean;
};

export default function CustomInput(props: InputContent) {
  return (
    <View style={[BtnStyles.container, {marginBottom: 57}]}>
      <Text style={userStyles.title}>{props.title}</Text>
      <TextInput
        style={[
          BtnStyles.container,
          props.text != '' ? BtnStyles.outlined : BtnStyles.emptyContent,
          {padding: 15},
        ]}
        onChangeText={props.setText}
        value={props.text}
        placeholder={props.placeholder}
        placeholderTextColor={'#999999'}
        secureTextEntry={props.isPw}
      />
    </View>
  );
}
