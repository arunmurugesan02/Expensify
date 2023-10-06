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
import Snackbar from 'react-native-snackbar';
import Loading from '../components/Loading';
import {addDoc} from 'firebase/firestore';
import { expensesRef } from '../config/firebase';
export default function AddExpenseScreen(props) {
  const navigation = useNavigation();
  const [title, SetTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const {id} = props.route.params;
  console.log('idddddd', id);
  const categories = [
    {
      title: 'Food',
      value: 'food',
    },
    {
      title: 'Shopping',
      value: 'shopping',
    },
    {
      title: 'Entertainment',
      value: 'entertainment',
    },
    {
      title: 'Savings',
      value: 'savings',
    },
    {
      title: 'Other',
      value: 'other',
    },
  ];

  const AddTripHandler = async () => {
    if (title && amount && category) {
      setLoading(true);
      let doc = await addDoc(expensesRef, {
        title,
        amount,
        category,
        tripId: id,
      });
      setLoading(false);
      if (doc && doc.id) {
        console.log(doc.id);
        navigation.goBack();
      }
    } else {
      Snackbar.show({
        text: 'Please enter all details',
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
            Add Expense
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 2}}>
        <Image
          source={require('../assets/images/expenseBanner.png')}
          style={{
            width: 500,
            height: 300,
            resizeMode: 'contain',
          }}
        />
      </View>

      <View>
        <Text style={styles.title}>For What?</Text>
        <TextInput
          style={styles.inputBox}
          value={title}
          onChangeText={SetTitle}
        />
        <Text style={styles.title}>How Much?</Text>
        <TextInput
          style={styles.inputBox}
          value={amount}
          onChangeText={setAmount}
        />
        <Text style={styles.title}>Category</Text>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {categories.map(cat => {
          let bgColor = 'white';
          if (cat.value == category) {
            bgColor = 'green';
          }
          return (
            <TouchableOpacity
              onPress={() => setCategory(cat.value)}
              key={cat.value}
              style={{
                backgroundColor: `${bgColor}`,
                padding: 5,
                marginBottom: 10,
                marginRight: 8,
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 20, color: 'black', padding: 3}}>
                {cat.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {
        loading ? (
          <Loading />
        ):(
<TouchableOpacity onPress={AddTripHandler}>
          <View
            style={{
              backgroundColor: '#A6FF96',
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              borderRadius: 20,
              marginTop: 10,
            }}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: 500}}>
              Add Expense
            </Text>
          </View>
        </TouchableOpacity>
        )
      }
        
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
    marginTop: 5,
    marginBottom: 15,
    color: 'black',
  },
});
