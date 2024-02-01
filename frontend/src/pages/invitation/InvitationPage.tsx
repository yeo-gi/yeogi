import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {MakeDynamicLink} from '../../hooks/MakeDynamicLink';

export default function InvitationPage() {
  useEffect(() => {
    MakeDynamicLink(1, 1);
  }, []);

  return (
    <View>
      <Text>InvitationPage</Text>
    </View>
  );
}
