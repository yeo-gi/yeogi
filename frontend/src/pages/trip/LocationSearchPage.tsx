import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomSearchBar from '../../components/common/CustomSearchBar';
import {styles} from '../../style/common/BasicContainerStyles';
import axios from 'axios';
import config from '../../../apikey';
import PageHeader from '../../components/common/PageHeader';

export default function LocationSearchPage() {
  const [query, setQuery] = useState('');

  const onPressSearch = async () => {
    const {data} = await axios({
      method: 'get',
      url: `https://openapi.naver.com/v1/search/local.json?query=${query}`,
      headers: {
        'X-Naver-Client-Id': config.CLIENT_ID,
        'X-Naver-Client-Secret': config.CLIENT_SECRET,
        Accept: 'application/json',
      },
    });
    console.log(query);
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader page="LocationSearch" title="" />
      <CustomSearchBar
        text={query}
        setText={setQuery}
        placeholder="목적지를 검색해보세요."
        title="목적지"
        marginTop={18}
        marginBottom={0}
        onPress={onPressSearch}
      />
    </SafeAreaView>
  );
}
