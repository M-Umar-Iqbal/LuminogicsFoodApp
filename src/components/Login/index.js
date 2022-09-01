import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  ToastAndroid,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {AddEvents} from '../../redux/actions/action';
import {TextInput} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {colors} from '../../constants/constants';
import URL from '../../constants/constants';
import getStyles from './style';

import {Button} from 'react-native-paper';
import InputField from '../commons/inputField';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

export default function Home({navigation}) {
  const dispatch = useDispatch();

  const styles = getStyles();
  const [emailErrorColor, setEmailErrorColor] = useState(colors.main);
  const [passwordErrorColor, setPasswordErrorColor] = useState(colors.main);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const storeData = async (token, name, email, image) => {
    try {
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('userName', name);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('userImage', image);
    } catch (e) {
      //error
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
      setEmailError('The Email Field Is Required');
    } else {
      setEmailErrorColor('red');
      setEmailError('Email is Invalid');
      return false;
    }
  }

  function passwordCheck() {
    if (password === '') {
      setPasswordErrorColor('red');
      setPasswordError('The Password Field Is Required');
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
  }

  function checkValidation() {
    const passwordValidation = passwordCheck();
    const emailValidation = emailCheck();
    if (passwordValidation && emailValidation) {
      setLoader(true);
      axios
        .post(`${URL}/api/users/log-in`, admin)
        .then(function (response) {
          const payload = response?.data?.payload?.data;
          const Token = payload?.token;
          const userName = payload?.user?.userName;
          const Email = payload?.user?.email;
          const Image = payload?.user?.employeeImage;
          const availableEvents = payload?.events;
          try {
            dispatch(AddEvents(availableEvents));
          } catch (e) {
            console.log(e);
          }

          storeData(Token, userName, Email, Image);
          ToastAndroid.show(response.data.metadata.message, ToastAndroid.SHORT);

          setTimeout(() => {
            response?.data?.metadata?.responseCode === 200
              ? navigation.navigate('dashBoard')
              : ToastAndroid.show('Error Occurred', ToastAndroid.SHORT);
            setLoader(false);
          }, 1000);
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
      <ScrollView flex={1} style={{backgroundColor: colors.lightGrey}}>
        <View style={styles.cardText}>
          <Image
            style={{width: 110, height: 110}}
            source={require('../../assets/images/hamburger.png')}
          />
          <Text style={styles.logoText}>LuMeal</Text>
        </View>
        <View style={styles.mainInputFieldsContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.gap}>
              <Text style={styles.loginText}>Sign In</Text>
            </View>
            <InputField
              placeholder="Email"
              color={emailErrorColor}
              icon="mail-outline"
              iconSize={32}
              setText={setEmail}
              keyboardType="email"
              rightIcon={'close'}
            />
            <View style={styles.gap}>
              <Text style={styles.error}>{emailError}</Text>
            </View>
            <InputField
              placeholder="Password"
              color={passwordErrorColor}
              icon="lock-outline"
              iconSize={32}
              Type="password"
              setText={setPassword}
              secure={true}
              rightIcon={'remove-red-eye'}
            />
            <View style={styles.gap}>
              <Text style={styles.error}>{passwordError}</Text>
            </View>

            <Button
              style={styles.customButtonContainer}
              icon="login"
              mode="contained"
              buttonColor={colors.main}
              onPress={checkValidation}
              loading={loader}
              contentStyle={{height: 65}}>
              Sign In
            </Button>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
