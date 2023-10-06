import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/EmptyList';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {signOut} from 'firebase/auth';
import {auth, tripsRef} from '../config/firebase';
import {useSelector} from 'react-redux';
import {getDocs, query, where} from 'firebase/firestore';
import Loading from '../components/Loading';
// const trip = [
//   {id: 1, place: 'Karur', country: 'TamilNadu'},
//   {id: 2, place: 'Erunakulam', country: 'Kerala'},
//   {id: 3, place: 'Bangalore', country: 'Karnataka'},
//   {id: 4, place: 'Hyderabad', country: 'Andhra Pradesh'},
//   {id: 5, place: 'Mumbai', country: 'Maharastra'},
//   {id: 6, place: 'Delhi', country: 'UP'},
//   {id: 7, place: 'Erunakulam', country: 'Kerala'},
//   {id: 8, place: 'Delhi', country: 'UP'},
// ];

export default function HomeScreen() {
  const {user} = useSelector(state => state.user);
  const [trips, setTrips] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const[loading,setLoading] = useState(false)

  const fetchTrips = async () => {
    setLoading(true);
    const q =  query(tripsRef, where("userId",'==', user.uid));
    const fetchedTrips = await getDocs(q);
    let data = [];
    fetchedTrips.forEach(doc => {
      console.log(doc.data);
      data.push({...doc.data(), id: doc.id});
    });
    console.log(trips);
    console.log('coeeee');
    setTrips(data);
    setLoading(false);

  };
  useEffect(() => {
    if (isFocused) {
      fetchTrips();
    }
  }, [isFocused]);
  const LogoutHandler = async () => {
    await signOut(auth);
  };
  return (
    <View>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 900,
            color: 'black',
            shadowColor: 'black',
          }}>
          Expensify
        </Text>
        <TouchableOpacity style={styles.btn} onPress={LogoutHandler}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: 'black',
              padding: 3,
              paddingHorizontal: 10,
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#87CEEB',
          borderRadius: 20,
          marginTop: 14,
          marginHorizontal: 20,
          height: '25%',
        }}>
        <Image
          source={require('../assets/images/banner.png')}
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
            Recent Trips
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('AddTrip')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 400,
                color: 'black',
                padding: 3,
                paddingHorizontal: 10,
              }}>
              Add Trip
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 460, marginTop: 10}}>
          {
            loading ?(
              <Loading />
            ):(
              <FlatList
              style={{marginTop: 10, marginHorizontal: 10}}
              data={trips}
              numColumns={2}
              ListEmptyComponent={
                <EmptyList message={"You havent't recorded any trips yet"} />
              }
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{
                justifyContent: 'center',
              }}
              renderItem={({item}) => {
                console.log('Item in HomeScreen:', item);
  
                return (
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('TripExpense', {...item})}>
                    <View>
                      <Image
                        source={randomImage()}
                        style={{width: 130, height: 100, marginBottom: 10}}
                      />
                      <Text
                        style={{color: 'black', fontWeight: 900, fontSize: 17}}>
                        {item.place}
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 500,
                          fontSize: 13,
                          marginBottom: 5,
                        }}>
                        {item.country}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
            )

          }
         
        </View>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>
      <View></View>
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
