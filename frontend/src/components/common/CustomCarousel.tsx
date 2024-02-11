import React, {useMemo} from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {windowHeight, windowWidth} from '../../hooks/Dimensions';

// type Props = {
//   gap: number;
//   offset: number;
//   pages: any[];
//   pageWidth: number;
// };

export default function CustomCarousel() {
  const emptyImg: ImageSourcePropType = require('../../assets/images/empty.png');
  const data = useMemo(
    () => [
      {
        mainImageUrl: emptyImg,
      },
      {
        mainImageUrl: emptyImg,
      },
      {
        mainImageUrl: emptyImg,
      },
      {
        mainImageUrl: emptyImg,
      },
    ],
    [emptyImg],
  );

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity>
            <Image source={item.mainImageUrl} style={styles.image} />
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => String(index)}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={true}
        pagingEnabled
        style={{marginBottom: 16}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  image: {
    height: Math.round(windowHeight * 0.5),
    width: Math.round(windowWidth - 25),
    resizeMode: 'stretch',
  },
});
