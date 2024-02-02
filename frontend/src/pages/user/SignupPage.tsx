import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles as ConStyles} from '../../style/common/BasicContainerStyles';
import {userStyles} from '../../style/user/UserStyles';
import {styles as BtnStyles} from '../../style/common/RoundedBtnStyles';
import CustomInput from '../../components/common/CustomInput';
import CustomCheckBox from '../../components/common/CustomCheckBox';
import {customColor} from '../../style/common/CommonStyle';
import ActionBtn from '../../components/common/ActionBtn';
import Entypo from 'react-native-vector-icons/FontAwesome6';
import {useNavi} from '../../components/navigation/useNavi';

export default function SignupPage() {
  // 입력 내용
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [nickname, setNickname] = useState('');
  // 유효성 검사
  const [emailVal, setEmailVal] = useState(false);
  const [pwVal, setPwVal] = useState(false);
  const [confirmPwVal, setConfirmPwVal] = useState(false);
  const [nicknameVal, setNicknameVal] = useState(false);
  // 유효성 검사 메시지
  const [emailMsg, setEmailMsg] = useState('⦁ 이메일 중복확인을 진행해주세요.');
  const [pwMsg, setPwMsg] = useState('⦁ 비밀번호를 입력헤주세요.');
  const [confirmPwMsg, setConfirmPwMsg] =
    useState('⦁ 비밀번호 확인을 입력헤주세요.');
  const [nicknameMsg, setNicknameMsg] = useState('⦁ 닉네임을 입력해주세요.');
  // 약관 관련
  const [total, setTotal] = useState(false);
  const [required, setRequired] = useState(false);
  const [optional, setOptional] = useState(false);

  // 비밀번호 유효성 검사
  useEffect(() => {
    if (email.length > 0) {
      setEmailVal(true);
      setEmailMsg('');
    } else {
      setEmailVal(false);
      setEmailMsg('⦁ 이메일 중복확인을 진행해주세요.');
    }
  }, [email]);

  // 비밀번호 유효성 검사
  useEffect(() => {
    if (pw.length > 0) {
      setPwVal(true);
      setPwMsg('');
    } else {
      setPwVal(false);
      setPwMsg('⦁ 비밀번호를 입력헤주세요.');
    }
  }, [pw]);

  // 비밀번호 확인 유효성 검사
  useEffect(() => {
    if (pw.length > 0) {
      if (pw === confirmPw) {
        setConfirmPwVal(true);
        setConfirmPwMsg('⦁ 비밀번호가 확인되었습니다.');
      } else {
        setConfirmPwVal(false);
        setConfirmPwMsg('⦁ 비밀번호가 일치하지 않습니다.');
      }
    } else {
      setConfirmPwVal(false);
      setConfirmPwMsg('⦁ 비밀번호 확인을 입력헤주세요.');
    }
  }, [pw, confirmPw]);

  // 닉네임 유효성 검사
  useEffect(() => {
    if (nickname.length > 0) {
      setNicknameVal(true);
      setNicknameMsg('');
    } else {
      setNicknameVal(false);
      setNicknameMsg('⦁ 닉네임을 입력헤주세요.');
    }
  }, [nickname]);

  // 약관 관련
  useEffect(() => {
    if (required && optional) {
      setTotal(true);
    } else {
      setTotal(false);
    }
  }, [total, required, optional]);

  const totalAgreementFunc = () => {
    setTotal(!total);
    if (!total) {
      setRequired(true);
      setOptional(true);
    } else {
      setRequired(false);
      setOptional(false);
    }
  };

  const navigation = useNavi();

  return (
    <SafeAreaView style={[ConStyles.container]}>
      <View>
        <Entypo
          name="arrow-left-long"
          color={'black'}
          style={{marginTop: 15, marginBottom: 7}}
          onPress={() => {
            navigation.pop();
          }}
        />
        <Text style={[userStyles.header]}>회원가입</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <InputWithBtn
          title="이메일"
          text={email}
          setText={setEmail}
          placeholder="이메일"
          validationMsg={emailMsg}
          isValidate={emailVal}
        />
        <CustomInput
          title="비밀번호"
          text={pw}
          setText={setPw}
          placeholder="비밀번호"
          isPw={true}
          validationMsg={pwMsg}
          isValidate={pwVal}
        />
        <CustomInput
          title="비밀번호 확인"
          text={confirmPw}
          setText={setConfirmPw}
          placeholder="비밀번호 확인"
          isPw={true}
          validationMsg={confirmPwMsg}
          isValidate={confirmPwVal}
        />
        <CustomInput
          title="닉네임"
          text={nickname}
          setText={setNickname}
          placeholder="닉네임"
          isPw={true}
          validationMsg={nicknameMsg}
          isValidate={nicknameVal}
        />
        <View style={{width: '100%'}}>
          <CustomCheckBox
            isChecked={total}
            onPress={totalAgreementFunc}
            title="전체 약관 동의"
          />
          <View style={styles.agreement}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomCheckBox
                isChecked={required}
                onValueChangeHandler={setRequired}
                title="필수 약관 동의"
                marginRight={15}
              />
              <Entypo
                name="chevron-right"
                color={'black'}
                onPress={() => {
                  navigation.navigate('RequriedAgreement');
                }}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomCheckBox
                isChecked={optional}
                onValueChangeHandler={setOptional}
                title="선택 약관 동의"
                marginRight={15}
              />
              <Entypo
                name="chevron-right"
                color={'black'}
                onPress={() => {
                  navigation.navigate('OptionalAgreement');
                }}
              />
            </View>
          </View>
        </View>
        <ActionBtn
          msg="회원가입"
          isColor={true}
          marginTop={13}
          marginBottom={17}
          onPress={() => console.log('회원가입')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

type Props = {
  title: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  validationMsg?: string;
  isValidate?: boolean;
};

function InputWithBtn(props: Props) {
  const isValidate = props.isValidate ?? false;
  const [color, setColor] = useState(customColor.gray50);

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
    <View style={[BtnStyles.container, {marginBottom: 57}]}>
      <Text style={userStyles.title}>{props.title}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput
          style={[
            BtnStyles.container,
            props.text != '' ? BtnStyles.outlined : BtnStyles.emptyContent,
            {padding: 15, width: '68%'},
          ]}
          onChangeText={props.setText}
          value={props.text}
          placeholder={props.placeholder}
          placeholderTextColor={customColor.gray50}
        />
        <ActionBtn
          msg="중복체크"
          isColor={true}
          color={customColor.blue}
          isRegular={true}
          width={'30%'}
          onPress={() => {
            console.log(`중복체크 ${props.text}`);
          }}
        />
      </View>
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

const styles = StyleSheet.create({
  email: {},
  agreement: {
    borderWidth: 1,
    borderColor: customColor.gray40,
    paddingVertical: 17,
    paddingLeft: 14,
  },
});
