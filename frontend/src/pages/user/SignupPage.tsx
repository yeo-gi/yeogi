import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles as ConStyles} from '../../style/common/BasicContainerStyles';
import {userStyles} from '../../style/user/UserStyles';
import CustomInput from '../../components/common/CustomInput';
import CustomCheckBox from '../../components/common/CustomCheckBox';
import {commonStyles, customColor} from '../../style/common/CommonStyle';
import RoundedBtn from '../../components/common/RoundedBtn';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [nickname, setNickname] = useState('');
  const [total, setTotal] = useState(false);
  const [required, setRequired] = useState(false);
  const [optional, setOptional] = useState(false);

  return (
    <SafeAreaView style={[ConStyles.container, {alignItems: 'center'}]}>
      <Text style={userStyles.header}>회원가입</Text>
      <View style={[commonStyles.rowCenterContents, {width: '100%'}]}>
        <View style={{width: 186}}>
          <CustomInput
            title="이메일"
            text={email}
            setText={setEmail}
            placeholder="이메일"
            isPw={false}
          />
        </View>
        <RoundedBtn
          msg="중복체크"
          isColor={true}
          color={customColor.blue}
          isRegular={true}
          width={75}
          marginLeft={7}
          onPress={() => {
            console.log(email);
          }}
        />
        {/* <View
          style={[
            BtnStyles.container,
            BtnStyles.colored,
            {width: 75, marginLeft: 7, backgroundColor: customColor.blue},
          ]}>
          <Pressable
            onPress={() => {
              console.log(email);
            }}
            style={BtnStyles.button}>
            <Text style={[BtnStyles.font, {color: 'white'}]}>중복체크</Text>
          </Pressable>
        </View> */}
      </View>
      <CustomInput
        title="비밀번호"
        text={pw}
        setText={setPw}
        placeholder="비밀번호"
        isPw={true}
      />
      <CustomInput
        title="비밀번호 확인"
        text={confirmPw}
        setText={setConfirmPw}
        placeholder="비밀번호 확인"
        isPw={true}
      />
      <CustomInput
        title="닉네임"
        text={nickname}
        setText={setNickname}
        placeholder="닉네임"
        isPw={true}
      />
      <View style={{width: '100%'}}>
        <CustomCheckBox
          isChecked={total}
          onValueChangeHandler={setTotal}
          title="전체 약관 동의"
        />
        <View style={styles.agreement}>
          <CustomCheckBox
            isChecked={required}
            onValueChangeHandler={setRequired}
            title="필수 약관 동의"
          />
          <CustomCheckBox
            isChecked={optional}
            onValueChangeHandler={setOptional}
            title="선택 약관 동의"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  email: {},
  agreement: {
    borderWidth: 1,
    borderColor: customColor.gray40,
    paddingVertical: 19,
    paddingLeft: 14,
  },
});
