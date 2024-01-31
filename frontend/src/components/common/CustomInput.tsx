import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles as BtnStyles} from '../../style/common/RoundedBtnStyles';
import {userStyles} from '../../style/user/UserStyles';
import {customColor} from '../../style/common/CommonStyle';

type InputContent = {
  title: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  isPw: boolean;
  marginBottom?: number;
  validationMsg?: string;
  isValidate?: boolean;
};

export default function CustomInput(props: InputContent) {
  const isValidate = props.isValidate ?? false;

  return (
    <View
      style={[BtnStyles.container, {marginBottom: props.marginBottom ?? 57}]}>
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
      <Text
        style={[
          userStyles.pressableSmallText,
          props.validationMsg ? {marginTop: 5} : {marginTop: 0},
          isValidate ? {color: customColor.blue} : {color: customColor.red},
        ]}>
        {props.validationMsg}
      </Text>
    </View>
  );
}
