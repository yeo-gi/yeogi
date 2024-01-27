import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  postCardContainer: {
    flexDirection: 'row',
    height: 65,
    borderBottomWidth: 0.5,
    borderColor: '#CCCCCC',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 10,
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  profileTitle: {
    fontSize: 11,
  },
  postContainer: {
    padding: 10,
    justifyContent: 'center',
  },
  postTitle: {
    fontSize: 14,
  },
  postContent: {
    fontSize: 11,
  },
});
