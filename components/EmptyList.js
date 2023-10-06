import {View, Text, Image} from 'react-native';
import React from 'react';

export default function EmptyList({message}) {
  return (
    <View style={{alignItems: 'center',marginTop:5}}>
      <Image
        style={{width: 200, height: 200, resizeMode: 'cover'}}
        source={require('../assets/images/empty.png')}
      />
      <Text style={{fontSize: 20, fontWeight: 500, color: 'black',fontStyle:'italic',marginTop:5}}>
        {message || 'Data not available'}
      </Text>
    </View>
  );
}
