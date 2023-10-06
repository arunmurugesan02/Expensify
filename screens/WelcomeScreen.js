import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Gif from 'react-native-gif';


const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', marginTop: 50}}>
      <Gif
          source={require('../assets/images/welcome1.gif')}
          style={{ width: 350, height: 300, borderRadius: 20 }}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <Text style={{fontSize: 30, fontWeight: 700, color: 'black'}}>
          Expensify
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 50}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            backgroundColor: '#A8DF8E',
            marginHorizontal: 40,
            borderRadius: 20,
            height: 50,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: 'black',
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignOut')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            backgroundColor: '#A8DF8E',
            marginHorizontal: 40,
            borderRadius: 20,
            height: 50,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: 'black',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
