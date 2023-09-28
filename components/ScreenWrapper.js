import {View, Text, Platform, StatusBar} from 'react-native';
import React from 'react';

export default function ScreenWrapper({children}) {
  return <View>{children}</View>;
}
