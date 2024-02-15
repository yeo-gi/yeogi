import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {customColor} from '../../style/common/CommonStyle';
import {useNavi} from '../navigation/useNavi';

/**
 * 사용 예시
 * <View style={{flexDirection: 'row'}}>
      <TextWithIconBtn
        text="비용 정산하기"
        icon="money-bills"
        isEntypo={true}
        page="Login"
        iconSize={16}
      />
      <TextWithIconBtn
        text="일행찾기"
        icon="person-circle-check"
        isEntypo={true}
        page="Login"
        iconSize={18}
      />
    </View>
 */

type Props = {
  text: string;
  icon: string;
  page: string | Function | (() => void); // 단순 페이지 이동 시에는 string 타입으로 페이지 이름 입력, 페이지 이동시 params가 필요하거나 다른 함수를 실행시키고 싶을 시엔 함수 형태로
  isEntypo?: boolean;
  isFontisto?: boolean;
  iconSize?: number;
};

export default function TextWithIconBtn(props: Props) {
  const navigation = useNavi();
  const onPress = () => {
    if (typeof props.page === 'string') {
      navigation.navigate(props.page as never);
    } else {
      props.page();
    }
  };
  const styles = Styles({iconSize: props.iconSize});
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      {props.isEntypo ? (
        <Entypo
          name={props.icon}
          size={props.iconSize ?? 20}
          style={styles.icon}
        />
      ) : null}
      {props.isFontisto ? (
        <Fontisto
          name={props.icon}
          size={props.iconSize ?? 20}
          style={styles.icon}
        />
      ) : null}
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

type styleProps = {
  iconSize?: number;
};

function Styles(props: styleProps) {
  return StyleSheet.create({
    container: {
      // borderRadius: 8,
      // borderWidth: 1,
      // paddingHorizontal: 8,
      height: 32,
      flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {
      // marginLeft: 8,
      fontSize: 14,
      color: '#1D1B20',
      paddingVertical: 6,
      paddingLeft: props.iconSize ? 22 + props.iconSize : 42,
      paddingRight: 8,
      borderRadius: 8,
      borderWidth: 1,
      marginRight: 10,
    },
    icon: {
      color: customColor.blue,
      marginHorizontal: 8,
      position: 'absolute',
    },
  });
}
