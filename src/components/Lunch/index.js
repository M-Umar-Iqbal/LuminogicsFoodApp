import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import getStyles from './style';
import LunchCard from '../commons/lunchCard';
import {useBackHandler} from '@react-native-community/hooks';

export default function Lunch({navigation: {goBack}}) {
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
      name: 'Umar Iqbal',
      roti: '0',
      paid: '100',
      description: 'Hello i am umar',
    },
    {
      name: 'Usman',
      roti: '5',
      paid: '200',
      description: 'Hello i am usman',
    },
  ];
  const {day, date} = Date;
  return (
    <View flex={1}>
      <View style={styles.container} flex={2.5}>
        <View style={styles.detailContainer}>
          <View style={{alignItems: 'center', padding: 10}}>
            <Text style={styles.mainHeading}>Lunch Orders</Text>
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
              Total bread's: 22
            </Text>
          </View>
        </View>
      </View>
      <View flex={7.5}>
        <ScrollView>
          <LunchCard />
          <LunchCard />
          <LunchCard />
          <LunchCard />
          <LunchCard />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
