import React, {useEffect, useContext, useState} from 'react';
import {
  Text,
  View,
  Alert,
  BackHandler,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import {Avatar} from 'react-native-paper';
import Card from '../commons/itemCards';
import getStyles from './style';
import {useBackHandler} from '@react-native-community/hooks';
import MaterialIcons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {
  colors,
  morningTeaStart,
  morningTeaEnd,
  eveningTeaStart,
  eveningTeaEnd,
  lunchStart,
  lunchEnd,
} from '../../constants/constants';
import {useSelector} from 'react-redux';
import CheckInternet from '../../components/commons/checkInternet/index.js';
import {AddToken} from '../../redux/actions/action';
import {AddEvents} from '../../redux/actions/action';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function Dashboard({navigation}) {
  const Time12Hr = [
    '12:00 AM',
    '01:00 AM',
    '02:00 AM',
    '03:00 AM',
    '04:00 AM',
    '05:00 AM',
    '06:00 AM',
    '07:00 AM',
    '08:00 AM',
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
    '08:00 PM',
    '09:00 PM',
    '10:00 PM',
    '11:00 PM',
  ];
  const data = useSelector(state => state.Events.eventData);

  const dispatch = useDispatch();

  const [token, setToken] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const styles = getStyles();

  useEffect(() => {
    getAll();
  }, []);

  async function getAll() {
    const token = await AsyncStorage.getItem('token');
    setToken(token);
  }

  function checkTime(start, end) {
    var now = new Date();
    var time = now.getHours() * 60 + now.getMinutes();
    return time >= start && time < end;
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(100).then(() => setRefreshing(false));
  }, []);

  const storeData = async value => {
    try {
      await AsyncStorage.removeItem(value);
    } catch (e) {
      //error
    }
  };

  // BackHandler.exitApp()
  function confirmExit() {
    Alert.alert('', 'Do you want to close the app?', [
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
          height: 65,
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
            <Avatar.Image
              size={40}
              backgroundColor={colors.royalBlue}
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
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPressIn={() => {
              dispatch(AddToken('null'));
              storeData('token');
              storeData('userImage');
              navigation.navigate('login');
              // dispatch(AddEvents(null));
            }}>
            <MaterialIcons
              name={'log-out-outline'}
              size={40}
              color={colors.royalBlue}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        backgroundColor={colors.main}
        flex={1}
        paddingTop={10}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <CheckInternet />
        <View style={styles.mainContainer} flex={1}>
          {data !== null &&
            data.map(e => (
              <Card
                key={e._id}
                Title={e.eventName.replace('-', ' ')}
                img={
                  e.eventName === 'Morning-Tea' || e.eventName === 'Evening-Tea'
                    ? 'coffee'
                    : 'hamburger'
                }
                color={
                  e.eventName === 'Morning-Tea'
                    ? '#9ED2C6'
                    : e.eventName === 'Evening-Tea'
                    ? '#FEC260'
                    : e.eventName === 'Lunch'
                    ? '#D36B00'
                    : '#f0f0f0'
                }
                onPress={() => navigation.navigate(e.eventName)}
                helperText={`The report can be generated after ${
                  Time12Hr[e.eventEndTime]
                }`}
                disabled={
                  checkTime(e.eventEndTime * 60 + 0, morningTeaEnd)
                    ? false
                    : true
                }
              />
            ))}
          {/* <Card
            Title="Morning Tea"
            img="coffee"
            color="#9ED2C6"
            onPress={() => navigation.navigate('MorningTea')}
            helperText="The report can be generated after 11:00 AM"
            disabled={checkTime(morningTeaStart, morningTeaEnd) ? false : true}
          />
          <Card
            Title="Lunch"
            img="hamburger"
            color="#D36B00"
            onPress={() => navigation.navigate('Lunch')}
            helperText="The report can be generated after 01:00 PM"
            disabled={checkTime(lunchStart, lunchEnd) ? false : true}
          />

          <Card
            Title="Evening Tea"
            img="coffee"
            color="#FEC260"
            onPress={() => navigation.navigate('EveningTea')}
            helperText="The report can be generated after 04:00 PM"
            disabled={checkTime(eveningTeaStart, eveningTeaEnd) ? false : true}
          /> */}
        </View>
      </ScrollView>
    </>
  );
}
