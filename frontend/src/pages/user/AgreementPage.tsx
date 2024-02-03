import React from 'react';
import {ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function RequiredAgreementPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>필수 약관 페이지</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export function OptionalAgreementPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>선택 약관 페이지</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
