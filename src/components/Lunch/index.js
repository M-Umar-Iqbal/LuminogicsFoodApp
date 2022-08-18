import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import getStyles from './style';
import LunchCard from '../commons/lunchCard';
import {useBackHandler} from '@react-native-community/hooks';
import OrderDetail from '../commons/orderDetail';
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
      <OrderDetail
        title="Launch Requirements"
        day="Monday"
        date="28-02-2022"
        item="Roti"
        total={20}
      />
      <View flex={7.5}>
        <ScrollView>
          <LunchCard
            Name="Umar"
            paidAmount="500"
            totalRoti="3"
            description="Khamiri Roti or 1 liter wali bottle abcd Description:
            Khamiri Roti or 1 liter wali bottle abcdDescription: Khamiri Roti or 1"
          />
          <LunchCard Name="Usman" paidAmount="500" totalRoti="3" />
          <LunchCard />
          <LunchCard />
          <LunchCard />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
