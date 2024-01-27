import React from 'react';
import {Text, ScrollView, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DefaultText} from '../style/DefaultText';
import Entypo from 'react-native-vector-icons/FontAwesome6';
import PostList from '../components/community/PostList';

export default function Community() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>일행찾기 게시판</Text>
            <Entypo
              style={styles.writingIcon}
              name="pencil"
              color="black"
              size={16}
            />
          </View>
          <View>
            <DefaultText style={styles.titleText}>목록보기</DefaultText>
            <PostList></PostList>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  titleContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#CCCCCC',
  },
  writingIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 5,
  },
  titleText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Pretendard-Medium',
  },
});
