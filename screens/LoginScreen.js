import {View, Text} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';

export default function LoginScreen() {
  return (
    <ScreenWrapper>
      <View style={{backgroundColor: 'red'}}>
        <Text>LoginScreen</Text>
      </View>
    </ScreenWrapper>
  );
}
