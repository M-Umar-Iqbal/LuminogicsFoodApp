import React, {createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();
const token = async () => {
  const result = await AsyncStorage.getItem('token');

  return result;
};
export const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value={token()}>{children}</AuthContext.Provider>
  );
};
