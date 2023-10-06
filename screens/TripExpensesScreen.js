import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import EmptyList from '../components/EmptyList';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import ExpenseCard from '../components/ExpenseCard';
import { getDocs, query, where } from 'firebase/firestore';
import { expensesRef } from '../config/firebase';

export default function TripExpensesScreen(props) {
  const isFocused = useIsFocused();

  const items = [
    {id: 1, title: 'watched a movie', amount: 100, category: 'entertainment'},
    {id: 2, title: 'ate sandwich', amount: 200, category: 'food'},
    {id: 3, title: 'bought a jacket', amount: 1000, category: 'shopping'},
  ];
  const navigation = useNavigation();
  const {place, id, country} = props.route.params;
const [exp,setExp]= useState([])
  
  console.log(place, id, country);
  
  const fetchedExpenses = async()=>{
      const q = query(expensesRef,where("tripId",'==',id));
      let expenses = await getDocs(q);
      let data = [];
      expenses.forEach(doc =>{
        console.log(doc.data);
        data.push({...doc.data(),id:id});
      })
      setExp(data)
  }
  useEffect(()=>{
    if(isFocused){
      fetchedExpenses();

    }
  },[isFocused])
  
  return (
    <View>
      <View style={{marginTop: 10, marginHorizontal: 10}}>
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
            {country}
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: 'black',
              fontWeight: 400,
              textAlign: 'center',
            }}>
            {place} 
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          marginTop: 14,
          marginHorizontal: 20,
          height: '25%',
        }}>
        <Image
          source={require('../assets/images/7.png')}
          style={{width: '60%', height: '60%'}}
        />
      </View>
      <View style={{paddingTop: 10, marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 900,
              color: 'black',
              shadowColor: 'black',
            }}>
            Recent Expenses
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('AddExpense',{place, id, country})}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                color: 'black',
                padding: 3, 
                paddingHorizontal: 10,
              }}>
              Add Expense
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 450, marginTop: 10}}>
          <FlatList
            style={{marginTop: 10, marginHorizontal: 10}}
            data={exp}
            ListEmptyComponent={
              <EmptyList message={"You havent't recorded any expenses yet"} />
            }
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return <ExpenseCard item={item} />;
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
    paddingHorizontal: 10,
  },

  btn: {
    borderColor: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  card: {
    borderRadius: 10,
    marginBottom: 9,
    marginRight: 9,
    padding: 5,
    backgroundColor: 'white',
    elevation: 10,
  },
  contnet: {
    flex: 1,
  },
});
