import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles as ConStyles} from '../../style/common/BasicContainerStyles';
import CustomInput from '../../components/common/CustomInput';
import {userStyles} from '../../style/user/UserStyles';
import CustomCheckBox from '../../components/common/CustomCheckBox';
import {commonStyles} from '../../style/common/CommonStyle';
import PressableSmallText from '../../components/common/PressableSmallText';
import {useNavi} from '../../components/navigation/useNavi';
import Entypo from 'react-native-vector-icons/FontAwesome6';
import SNSLogin from '../../components/user/SNSLogin';
import RoundedBtn from '../../components/common/RoundedBtn';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [isKeep, setKeep] = useState(false);

  const navigation = useNavi();

  return (
    <SafeAreaView
      style={[ConStyles.container, {justifyContent: 'space-between'}]}>
      <View>
        <View>
          <Entypo
            name="arrow-left-long"
            color={'black'}
            style={{marginTop: 15, marginBottom: 7}}
            onPress={() => {
              navigation.pop();
            }}
          />
          <Text style={[userStyles.header]}>로그인</Text>
        </View>
        <CustomInput
          title="이메일"
          text={email}
          setText={setEmail}
          placeholder="이메일"
          isPw={false}
        />
        <CustomInput
          title="비밀번호"
          text={pw}
          setText={setPw}
          placeholder="비밀번호"
          isPw={true}
        />
        <CustomCheckBox
          isChecked={isKeep}
          onValueChangeHandler={setKeep}
          title="로그인 상태 유지"
        />
        <RoundedBtn
          msg="로그인"
          isColor={true}
          marginTop={37}
          marginBottom={16}
          page={() => console.log('로그인')}
          isDisabled={!(email && pw)}
        />
        <View style={commonStyles.rowCenterContents}>
          <PressableSmallText title="아이디 찾기" route="Signup" />
          <Text style={[userStyles.pressableSmallText, {marginHorizontal: 4}]}>
            |
          </Text>
          <PressableSmallText title="비밀번호 찾기" route="Signup" />
          <Text style={[userStyles.pressableSmallText, {marginHorizontal: 4}]}>
            |
          </Text>
          <PressableSmallText title="회원가입" route="Signup" />
        </View>
      </View>
      <SNSLogin />
    </SafeAreaView>
  );
}
