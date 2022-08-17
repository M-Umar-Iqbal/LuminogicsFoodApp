import {StyleSheet, Text, View, Alert, BackHandler} from 'react-native';
import React from 'react';
import Card from '../commons/itemCards';
import getStyles from './style';
import {useBackHandler} from '@react-native-community/hooks';
import confirmExit from '../commons/confirmExit';
export default function Dashboard({navigation}) {
  const styles = getStyles();
  // BackHandler.exitApp()
  function confirmExit() {
    Alert.alert('', 'Are you sure you want to Exit?', [
      {text: 'No', onPress: () => null, style: 'cancel'},
      {text: 'Yes', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  }
  useBackHandler(confirmExit);

  return (
    <View style={styles.container}>
      <Card
        Title="Morning Tea"
        img="coffee"
        color="#9ED2C6"
        onPress={() => navigation.navigate('MorningTea')}
      />
      <Card
        Title="Lunch"
        img="hamburger"
        color="#D36B00"
        onPress={() => navigation.navigate('Lunch')}
      />
      <Card
        Title="Evening Tea"
        img="coffee"
        color="#FEC260"
        onPress={() => navigation.navigate('EveningTea')}
      />
    </View>
  );
}
