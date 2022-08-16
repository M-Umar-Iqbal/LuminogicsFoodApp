import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from '../commons/card';
export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Card Title="Morning Tea" />
      <Card Title="Launch" />
      <Card Title="Evening Tea" />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
  },
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'grey',
  },
});
