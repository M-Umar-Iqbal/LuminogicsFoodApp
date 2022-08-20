import React, {useEffect, useState} from 'react';
import AppNavigator from './main/main';
import AuthNavigator from './auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getAll();
  }, []);

  async function getAll() {
    const Data = await AsyncStorage.getItem('token');
    Data !== 'null' ? setLoggedIn(true) : setLoggedIn(false);
    console.log(Data);
  }

  return (
    <NavigationContainer>
      {!loggedIn ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
