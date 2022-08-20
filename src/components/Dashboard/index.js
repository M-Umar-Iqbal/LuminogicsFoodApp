import {
  StyleSheet,
  Text,
  View,
  Alert,
  BackHandler,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import Card from '../commons/itemCards';
import getStyles from './style';
import {useBackHandler} from '@react-native-community/hooks';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  colors,
  morningTeaStart,
  morningTeaEnd,
  eveningTeaStart,
  eveningTeaEnd,
  lunchStart,
  lunchEnd,
} from '../../constants/constants';
import CheckInternet from '../../components/commons/checkInternet/index.js';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function Dashboard({navigation}) {
  useEffect(() => {
    getAll();
  }, []);
  const [token, setToken] = useState();
  async function getAll() {
    const token = await AsyncStorage.getItem('token');
    setToken(token);
  }
  const styles = getStyles();
  function inTime(start, end) {
    var now = new Date();
    var time = now.getHours() * 60 + now.getMinutes();
    time;
    return time >= start && time < end;
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(100).then(() => setRefreshing(false));
  }, []);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('token', value);
    } catch (e) {
      //error
    }
  };

  // BackHandler.exitApp()
  function confirmExit() {
    Alert.alert('', 'Do you want to exit?', [
      {text: 'No', onPress: () => null, style: 'cancel'},
      {text: 'Yes', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  }
  useBackHandler(confirmExit);

  return (
    <>
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            width: '20%',
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            {/* <MaterialIcons
              name={'account-circle'}
              size={30}
              color={colors.darkGrey}
            /> */}

            <Avatar.Image
              size={40}
              source={require('../../assets/images/avatar.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '65%',

            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              position: 'absolute',
              right: '34%',
              fontWeight: '600',
            }}>
            Dashboard
          </Text>
        </View>
        <View
          style={{
            width: '15%',
            // backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              storeData('null');
              token ? navigation.navigate('login') : navigation.popToTop();
            }}>
            <MaterialIcons name={'logout'} size={30} color={colors.main} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{backgroundColor: colors.main, flex: 1}}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <CheckInternet />
        <View style={styles.container}>
          <Card
            Title="Morning Tea"
            img="coffee"
            color="#9ED2C6"
            onPress={() => navigation.navigate('MorningTea')}
            helperText="Enable's after 11:00 AM "
            disabled={inTime(morningTeaStart, morningTeaEnd) ? false : true}
          />
          <Card
            Title="Lunch"
            img="hamburger"
            color="#D36B00"
            onPress={() => navigation.navigate('Lunch')}
            helperText="Enable's after 01:00 PM"
            disabled={inTime(lunchStart, lunchEnd) ? false : true}
          />
          <Card
            Title="Evening Tea"
            img="coffee"
            color="#FEC260"
            onPress={() => navigation.navigate('EveningTea')}
            helperText="Enables after 05:00 PM"
            disabled={inTime(eveningTeaStart, eveningTeaEnd) ? false : true}
          />
        </View>
      </ScrollView>
    </>
  );
}
