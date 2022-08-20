import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
  Alert,
  Keyboard,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../constants/constants';
import URL from '../../constants/constants';
import getStyles from './style';
import MaterialIcons from 'react-native-vector-icons/Ionicons';
import InputField from '../commons/inputField';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
  const styles = getStyles();
  const [emailErrorColor, setEmailErrorColor] = useState(colors.main);
  const [passwordErrorColor, setPasswordErrorColor] = useState(colors.main);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const storeData = async (token, name, email) => {
    try {
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('userName', name);
      await AsyncStorage.setItem('email', email);
    } catch (e) {
      'Error', e;
    }
  };

  const admin = {
    email,
    password,
  };

  let regex_email = 'faisal@luminogics.com';

  function emailCheck() {
    if (regex_email === email.toLowerCase()) {
      setEmailError('');
      setEmailErrorColor(colors.main);
      return true;
    } else if (email.trim() === '') {
      setEmailErrorColor('red');
      setEmailError('This field is required');
    } else {
      setEmailErrorColor('red');
      setEmailError('Invalid Email');
      return false;
    }
  }

  function passwordCheck() {
    if (password === '') {
      setPasswordErrorColor('red');
      setPasswordError('This field is required');
      return false;
    } else if (password.trim() === '') {
      setPasswordErrorColor('red');
      setPasswordError('This field must Contains letters, numbers, etc. ');
      return false;
    } else {
      setPasswordError('');
      setPasswordErrorColor(colors.main);
      return true;
    }

    // if (regex_password === password) {
    //   setPasswordError('');
    //   setPasswordErrorColor(colors.main);
    //   return true;
    // } else if (password.trim() === '') {
    //   setPasswordErrorColor('red');
    //   setPasswordError('This field is required');
    // } else {
    //   setPasswordErrorColor('red');
    //   setPasswordError('Please Enter a valid Password');
    //   return false;
    // }
  }

  function checkValidation() {
    const passwordValidation = passwordCheck();
    const emailValidation = emailCheck();
    if (passwordValidation && emailValidation) {
      setLoader(true);
      axios
        .post(`${URL}/api/users/log-in`, admin)
        .then(function (response) {
          const Token = response?.data?.payload?.data?.token;
          const userName = response?.data?.payload?.data?.user?.userName;
          const Email = response?.data?.payload?.data?.user?.email;
          storeData(Token, userName, Email);
          ToastAndroid.show(response.data.metadata.message, ToastAndroid.SHORT);
          setTimeout(() => {
            console.log('console', response?.data?.metadata?.responseCode);
            response?.data?.metadata?.responseCode === 200
              ? navigation.navigate('dashBoard')
              : ToastAndroid.show('Error Occurred', ToastAndroid.SHORT);
            setLoader(false);
          }, 500);
        })
        .catch(function (error) {
          setLoader(false);
          error.response.data.metadata.message == 400 ? (
            ToastAndroid.show('Error Occurred', ToastAndroid.SHORT)
          ) : (
            <></>
          );
          ToastAndroid.show(
            error.response.data.metadata.message,
            ToastAndroid.SHORT,
          );

          //Error
        });
    } else {
      Keyboard.dismiss();
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View flex={1} style={{backgroundColor: colors.lightGrey}}>
        <View style={styles.cardText}>
          <MaterialIcons
            name={'fast-food-outline'}
            size={110}
            color={colors.main}
          />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.gap}>
              <InputField
                placeholder="Email"
                variant="outlined"
                color={emailErrorColor}
                icon="mail-outline"
                iconSize={25}
                setText={setEmail}
                keyboardType="email"
                rightIcon={'close'}
              />
              <Text style={styles.error}>{emailError}</Text>
            </View>

            <View style={styles.gap}>
              <InputField
                placeholder="Password"
                variant="outlined"
                color={passwordErrorColor}
                icon="lock-outline"
                iconSize={25}
                Type="password"
                setText={setPassword}
                secure={true}
                rightIcon={'remove-red-eye'}
              />
              <Text style={styles.error}>{passwordError}</Text>
            </View>

            <View style={styles.container}>
              <TouchableOpacity
                style={styles.customButtonContainer}
                onPress={checkValidation}>
                {!loader ? (
                  <Text style={styles.customButtonTitle}>Login</Text>
                ) : (
                  <ActivityIndicator size={20} color="#ffffff" />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
