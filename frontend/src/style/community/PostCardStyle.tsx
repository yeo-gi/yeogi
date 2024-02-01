import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  postCardContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#CCCCCC',
    paddingTop: 18,
    paddingBottom: 18,
  },
  profileContainer: {
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  profileTitle: {
    fontSize: 6,
  },
  postContainer: {
    // paddingLeft: 10,
    paddingRight: 10,
    flexShrink: 1,
  },
  postTitle: {
    fontSize: 11,
    paddingBottom: 5,
    color: 'black',
    fontFamily: 'Pretendard-Medium',
  },
  postContent: {
    fontSize: 9,
    lineHeight: 18,
  },
});
