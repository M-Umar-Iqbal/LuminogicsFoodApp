import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useBackHandler} from '@react-native-community/hooks';
import {colors} from '../../constants/constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({navigation}) {
  function confirmExit() {
    navigation.goBack();
    return true;
  }
  const [token, setToken] = useState();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const token = await AsyncStorage.getItem('token');
    setToken(token);
    const userName = await AsyncStorage.getItem('userName');
    setUserName(userName);
    const email = await AsyncStorage.getItem('email');
    setEmail(email);
  }
  const [loader, setLoader] = useState(false);

  useBackHandler(confirmExit);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('token', value);
    } catch (e) {
      //error
    }
  };
  return (
    <View flex={1} style={{backgroundColor: colors.white}}>
      <View
        flex={5}
        style={{
          //   backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialIcons
          name={'account-circle'}
          size={200}
          color={colors.black}
        />
        <Text style={{fontSize: 35, fontWeight: '600', color: colors.black}}>
          {userName}
        </Text>
        <Text style={{fontSize: 20, fontWeight: '400', color: colors.black}}>
          {email}
        </Text>
      </View>
      <View flex={5} style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.customButtonContainer}
          onPress={() => {
            setLoader(true);
            storeData('null');
            token ? navigation.navigate('login') : navigation.popToTop();
          }}>
          {!loader ? (
            <Text style={styles.customButtonTitle}>Logout</Text>
          ) : (
            <ActivityIndicator size={20} color="#ffffff" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  customButtonContainer: {
    marginTop: 5,
    backgroundColor: colors.main,
    padding: 20,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  customButtonTitle: {
    color: 'white',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
