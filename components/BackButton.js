import React from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {Text, View, TouchableOpacity, TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={()=>navigation.goBack()}
      style={{
        backgroundColor: 'white',
        borderRadius: 20,
        height: 30,
        width: 30,
      }}>
      <ChevronLeftIcon size="30" color={'green'} />
    </TouchableOpacity>

  );
};

export default BackButton;
