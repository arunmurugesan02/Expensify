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
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLoading} from '../redux/slices/user';
import Loading from '../components/Loading';

export default function AddTripScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {userLoading} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const SubmitHandler = async () => {
    if (email && password) {
      // navigation.goBack();
      // navigation.navigate('Home');
      dispatch(setUserLoading(true));
      await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUserLoading(false));
    } else {
      dispatch(setUserLoading(false));
      Snackbar.show({
        text: 'Email and Password are required',
        backgroundColor: 'red',
      });
    }
  };

  return (
    <View style={{marginHorizontal: 25}}>
      <View style={{marginTop: 11}}>
        <View style={{top: 6, left: -10}}>
          <BackButton />
        </View>
        <View style={{top: -20, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              color: 'black',
              fontWeight: 700,
              textAlign: 'center',
            }}>
            Sign Up
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 8}}>
        <Image
          source={require('../assets/images/signup.png')}
          style={{
            width: '100%',
            height: 400,
            resizeMode: 'contain',
          }}
        />
      </View>

      <View>
        <Text style={styles.title}>Email </Text>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.title}>Password</Text>
        <TextInput
          style={styles.inputBox}
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>
      {userLoading ? (
        <Loading />
      ) : (
        <TouchableOpacity onPress={SubmitHandler} style={{marginTop: 40}}>
          <View
            style={{
              backgroundColor: '#A6FF96',
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              borderRadius: 20,
            }}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: 500}}>
              Sign Up
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
    marginBottom: 10,
  },
  inputBox: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 2,
    marginBottom: 10,
    color: 'black',
  },
});
