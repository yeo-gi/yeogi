// useNavi.ts
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

export type RootStackParam = {
  Home: undefined;
  Start: undefined;
  Chatting: {roomId: number; roomName: string; profileImg: string};
  Login: undefined;
  Signup: undefined;
  ChatList: undefined;
  RequriedAgreement: undefined;
  OptionalAgreement: undefined;
  Post: {postId: number};
  LocationSearch: undefined;
  SelectDate: undefined;
  Map: undefined;
};

export const useNavi = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  return navigation;
};
