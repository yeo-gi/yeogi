import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {Post} from './PostType';
import {DefaultText} from '../../style/DefaultText';
import {styles} from '../../style/community/PostMainStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavi} from '../navigation/useNavi';
import {customColor} from '../../style/common/CommonStyle';
import {createChatroom} from '../../apis/communityAPI/ChattingAPI';
import TimeDisplay from './../../hooks/TimeDisplay';

export default function PostMain({post}: {post: Post | null}) {
  const navigation = useNavi();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [roomNo, setRoomNo] = useState<number | null>();
  const userId = 1;

  async function createRoom() {
    const createdRoom = (await createChatroom(
      1,
      post?.userId as number,
    )) as number;
    setRoomNo(createdRoom);
    navigation.navigate('Chatting', {
      roomId: createdRoom,
      roomName: post?.nickname as string,
      profileImg: post?.profileImg as string,
    });
  }

  return (
    <View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{post?.title}</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.nickname}>{post?.nickname}</Text>
          <Text style={styles.updatedDate}>
            {TimeDisplay(post?.updatedDate as string)}
          </Text>
        </View>
      </View>
      <View style={styles.contentBox}>
        <DefaultText style={styles.contentText}>{post?.content}</DefaultText>
        {userId === post?.userId ? null : (
          <AntDesign
            style={styles.chattingIcon}
            name="message1"
            color={customColor.blue}
            size={20}
            onPress={createRoom}
          />
        )}
      </View>
    </View>
  );
}
