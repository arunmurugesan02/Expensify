import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import BackButton from '../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import Loading from '../components/Loading';
import Snackbar from 'react-native-snackbar';
import {addDoc} from 'firebase/firestore';
import {tripsRef} from '../config/firebase';
import { useSelector } from 'react-redux';
export default function AddTripScreen() {
  const navigation = useNavigation();
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState('');
  const {user} = useSelector(state =>state.user)

  const AddTripHandler = async() => {
    if (country && place) {
      setLoading(true);
      let doc = await addDoc(tripsRef, {
        country,
        place,
        userId: user.uid,
      });
      setLoading(false);
      if (doc && doc.id) {
        navigation.goBack();
      }
    } else {
      Snackbar.show({
        text: 'Place and Country are required',
        backgroundColor: 'red',
      });
    }
  };

  return (
    <View style={{marginHorizontal: 25}}>
      <View style={{marginTop: 11}}>
        <View style={{top: 6, left: 0}}>
          <BackButton />
        </View>
        <View style={{top: -30, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              color: 'black',
              fontWeight: 700,
              textAlign: 'center',
            }}>
            Add Trip
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 8}}>
        <Image
          source={require('../assets/images/4.png')}
          style={{
            width: '100%',
            height: 400,
            resizeMode: 'contain',
          }}
        />
      </View>

      <View>
        <Text style={styles.title}>Where on Earth? </Text>
        <TextInput
          style={styles.inputBox}
          value={place}
          onChangeText={setPlace}
        />
        <Text style={styles.title}>Which Country </Text>
        <TextInput
          style={styles.inputBox}
          value={country}
          onChangeText={setCountry}
        />
        <TextInput />
      </View>
      {loading ? (
        <Loading />
      ) : (
        <TouchableOpacity onPress={AddTripHandler}>
          <View
            style={{
              backgroundColor: '#A6FF96',
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              borderRadius: 20,
            }}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: 500}}>
              Add Trip
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontWeight: '900',
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
  },
  inputBox: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 2,
    marginBottom: 5,
    color: 'black',
  },
});
