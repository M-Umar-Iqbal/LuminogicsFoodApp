import React from 'react';
import {Text, View, Alert, ScrollView, FlatList} from 'react-native';
import getStyles from './style';
import {useBackHandler} from '@react-native-community/hooks';

const TeaGenerateReport = ({navigation: {goBack}}) => {
  const styles = getStyles();
  function confirmExit() {
    goBack();
    return true;
  }
  useBackHandler(confirmExit);
  const Date = {
    day: 'Monday',
    date: '29-03-2022',
  };

  const Data = [
    {
      name: 'umar',
      quantity: 1,
      sugar: 2,
    },
    {
      name: 'umar2',
      quantity: 1,
      sugar: 2,
    },
    {
      name: 'umar',
      quantity: 1,
      sugar: 2,
    },
    {
      name: 'umar',
      quantity: 1,
      sugar: 2,
    },
    {
      name: 'umar',
      quantity: 1,
      sugar: 2,
    },
    {
      name: 'umar',
      quantity: 1,
      sugar: 2,
    },
    {
      name: 'umar',
      quantity: 1,
      sugar: 2,
    },
    {
      name: 'umar',
      quantity: 1,
      sugar: 2,
    },
    {
      name: 'umar',
      quantity: 1,
      sugar: 2,
    },
    {
      name: 'umar',
      quantity: 1,
      sugar: 2,
    },
    {
      name: 'umar',
      quantity: 1,
      sugar: 2,
    },
    {
      name: 'umar',
      quantity: 1,
      sugar: 2,
    },
    {
      name: 'umar',
      quantity: 1,
      sugar: 2,
    },
    {
      name: 'umar',
      quantity: 1,
      sugar: 3,
    },
  ];
  const {day, date} = Date;

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <View style={{alignItems: 'center', padding: 10}}>
          <Text style={styles.mainHeading}>Evening Tea Requirements</Text>
        </View>
        <View style={{padding: 2, alignItems: 'center'}}>
          <Text style={styles.subHeading}>
            {day}, {date}
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            padding: 10,
            backgroundColor: 'white',
            alignItems: 'center',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            elevation: 10,
          }}>
          <Text style={[styles.subHeading, {color: '#E68653'}]}>
            Total Cups: 22
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'grey',
          padding: 15,
        }}>
        <View style={{width: '50%'}}>
          <Text style={styles.header}>Name</Text>
        </View>
        <View style={{width: '35%', alignItems: 'center'}}>
          <Text style={styles.header}>Quantity</Text>
        </View>
        <View style={{width: '15%', alignItems: 'center'}}>
          <Text style={styles.header}>Sugar</Text>
        </View>
      </View>
      <FlatList
        data={Data}
        renderItem={element => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // backgroundColor: 'red',
                padding: 15,
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
              }}>
              <View style={{width: '50%'}}>
                <Text
                  style={[
                    styles.listTitle,
                    {fontSize: 17, textTransform: 'capitalize'},
                  ]}>
                  {element.item.name}
                </Text>
              </View>
              <View style={{width: '35%', alignItems: 'center'}}>
                <Text style={styles.listTitle}>{element.item.quantity}</Text>
              </View>
              <View style={{width: '15%', alignItems: 'center'}}>
                <Text style={styles.listTitle}>{element.item.sugar}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default TeaGenerateReport;
