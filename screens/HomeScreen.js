import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import randomImage from '../assets/images/randomImage';
const trip = [
  {id: 1, place: 'Karur', country: 'TamilNadu'},
  {id: 2, place: 'Erunakulam', country: 'Kerala'},
  {id: 3, place: 'Bangalore', country: 'Karnataka'},
  {id: 4, place: 'Hyderabad', country: 'Andhra Pradesh'},
  {id: 5, place: 'Mumbai', country: 'Maharastra'},
  {id: 6, place: 'Delhi', country: 'UP'},
  {id: 7, place: 'Erunakulam', country: 'Kerala'},
  {id: 8, place: 'Delhi', country: 'UP'},
];

export default function HomeScreen() {
  return (
    
    <ScreenWrapper style={[styles.wrapper, (height = '100%')]}>
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
        <TouchableOpacity style={styles.btn}>
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
          <TouchableOpacity style={styles.btn}>
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
        <View style={{height: 450, marginTop: 10}}>
          <FlatList
            style={{marginTop: 10, marginHorizontal: 10}}
            data={trip}
            numColumns={2}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{
              justifyContent: 'center',
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.card}>
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
        </View>
      </View>
      <View>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>
    </ScreenWrapper>
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
