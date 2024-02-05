import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomSearchBar from '../../components/common/CustomSearchBar';
import {styles} from '../../style/common/BasicContainerStyles';

export default function LocationSearchPage() {
  const [query, setQuery] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <CustomSearchBar
        text={query}
        setText={setQuery}
        placeholder="목적지를 검색해보세요."
        title="목적지"
        marginTop={18}
        marginBottom={0}
      />
    </SafeAreaView>
  );
}
