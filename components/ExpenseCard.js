import {View, Text} from 'react-native';
import React from 'react';
const categoryBG = {
  food: '#E1D3EE',
  commute: '#B0E3D3',
  shopping: '#EcFAD7',
  entertainment: '#ffdfdd',
  other: '#CAD309',
};

const ExpenseCard = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginBottom: 15,
        backgroundColor: categoryBG[item.category],
        padding:20,
        borderRadius:10,

      }}>
      <View>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 500}}>
          {item.title}
        </Text>
        <Text style={{color: 'black'}}>{item.category}</Text>
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 500}}>
          Rs.
          {item.amount}
        </Text>
      </View>
    </View>
  );
};

export default ExpenseCard;
