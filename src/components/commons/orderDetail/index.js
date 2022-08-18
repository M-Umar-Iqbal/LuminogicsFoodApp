import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import getStyles from './style';
export default function orderDetail({
  title = 'Unknown Title',
  day = 'FunDay',
  date = '28-02-2022',
  item = 'items',
  total = 0,
}) {
  const styles = getStyles();
  return (
    <View flex={3}>
      <View style={styles.detailContainer}>
        <View style={{alignItems: 'center', padding: 15}}>
          <Text style={styles.mainHeading}>{title}</Text>
        </View>
        <View style={{padding: 2, alignItems: 'center'}}>
          <Text style={styles.subHeading}>{date}</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            padding: 20,
            backgroundColor: 'rgb(255,255,255)',
            alignItems: 'center',
            borderColor: '#E68653',
            borderWidth: 3,
            borderRadius: 1,
            elevation: 10,
          }}>
          <Text style={[styles.subHeading, {color: '#E68653'}]}>
            Total {item}: {total}
          </Text>
        </View>
      </View>
    </View>
  );
}
