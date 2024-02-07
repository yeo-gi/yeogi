import React, {useMemo} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// type Props = {
//   gap: number;
//   offset: number;
//   pages: any[];
//   pageWidth: number;
// };

export default function CustomCarousel() {
  const data = useMemo(
    () => [
      {
        mainImageUrl: 'C:Usershalloyeogi\frontendsrc/assets/images/empty.png',
      },
      {
        mainImageUrl: 'C:Usershalloyeogi\frontendsrcassetsimagesempty.png',
      },
      {
        mainImageUrl: 'C:Usershalloyeogi\frontendsrcassetsimagesempty.png',
      },
      {
        mainImageUrl: 'C:Usershalloyeogi\frontendsrcassetsimagesempty.png',
      },
    ],
    [],
  );

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, textAlign: 'center'}}>캐러셀..</Text>
      <FlatList
        data={data}
        horizontal
        contentContainerStyle={{paddingHorizontal: 24}}
        renderItem={({item}) => (
          <TouchableOpacity style={{marginRight: 12}}>
            <Image source={{uri: item.mainImageUrl}} />
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
});
