import React, {useEffect, useState, useContext} from 'react';
import AppNavigator from './main/main';
import AuthNavigator from './auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../providers/provider';
import {useSelector} from 'react-redux';
const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState();

  const Token = useSelector(state => {
    return state.AddToken.token;
  });
  console.log('This in navigation .index file', Token);

  useEffect(() => {
    getAll();
  }, [Token]);

  function getAll() {
    Token !== 'null' ? setLoggedIn(true) : setLoggedIn(false);
  }

  return <>{!loggedIn ? <AuthNavigator /> : <AppNavigator />}</>;
};

export default Navigation;
