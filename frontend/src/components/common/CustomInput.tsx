import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles as BtnStyles} from '../../style/common/RoundedBtnStyles';
import {userStyles} from '../../style/user/UserStyles';
import {customColor} from '../../style/common/CommonStyle';
import {removeWhitespace} from '../../hooks/Validation';

type InputContent = {
  title: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  isPw?: boolean;
  marginBottom?: number;
  validationMsg?: string;
  isValidate?: boolean;
};

export default function CustomInput(props: InputContent) {
  const isValidate = props.isValidate ?? false;
  const [color, setColor] = useState(customColor.gray50);

  useEffect(() => {
    props.setText(removeWhitespace(props.text));
  }, [props.text, props]);

  useEffect(() => {
    if (isValidate) {
      setColor(customColor.blue);
    } else {
      if (props.text) {
        setColor(customColor.red);
      } else {
        setColor(customColor.gray50);
      }
    }
  }, [isValidate, props.text]);

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
          {color: color},
        ]}>
        {props.validationMsg}
      </Text>
    </View>
  );
}
