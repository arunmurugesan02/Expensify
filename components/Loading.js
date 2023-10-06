import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={{justifyContent:'center', alignItems:'center',marginTop:40}}>
      <ActivityIndicator size='large' color={'green'} />
    </View>
  )
}

export default Loading;