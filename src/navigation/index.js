import React, {useEffect, useState, useContext} from 'react';
import AppNavigator from './main/main';
import AuthNavigator from './auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../providers/provider';

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  // const value = useContext(AuthContext);
  // console.log(value._W);

  useEffect(() => {
    getAll();
  }, [loggedIn]);

  async function getAll() {
    let Data = await AsyncStorage.getItem('token');
    Data !== 'null' && Data ? setLoggedIn(true) : setLoggedIn(false);
  }

  return (
    <NavigationContainer>
      {!loggedIn ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
