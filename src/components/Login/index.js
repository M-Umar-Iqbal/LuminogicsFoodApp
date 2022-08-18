import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
  Alert,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';

import getStyles from './style';
import {Stack, TextInput, IconButton} from '@react-native-material/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Home({navigation}) {
  const styles = getStyles();
  const [emailErrorColor, setEmailErrorColor] = useState('#45C5F0');
  const [passwordErrorColor, setPasswordErrorColor] = useState('#45C5F0');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loader, setLoader] = useState(false);

  let regex_email = 'faisal@luminogics.com';
  let regex_password = 'faisal122';

  function emailCheck() {
    if (regex_email === email.toLowerCase()) {
      setEmailError('');
      setEmailErrorColor('#45C5F0');
      return true;
    } else {
      setEmailErrorColor('red');
      setEmailError('Invalid Admin Email');
      return false;
    }
  }

  function passwordCheck() {
    if (regex_password === password) {
      setPasswordError('');
      setPasswordErrorColor('#45C5F0');
      return true;
    } else {
      setPasswordErrorColor('red');
      setPasswordError('Please Enter a valid Password');
      return false;
    }
  }

  function checkValidation() {
    const passwordValidation = passwordCheck();
    const emailValidation = emailCheck();
    if (passwordValidation && emailValidation) {
      setLoader(true);
      setTimeout(() => {
        navigation.navigate('Dash_board');
      }, 500);
    } else {
      Keyboard.dismiss();
    }
  }

  return (
    <View flex={1}>
      {/* <View style={styles.HeadingContainer}>
        <Text style={styles.largeTitle}>Sign in</Text>
        <Text style={styles.smallTitle}>Enter your Details to sign in</Text>
      </View> */}

      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          {/* <ArrowUpCircle /> */}
          <View style={styles.cardText}>
            <MaterialIcons
              name={'admin-panel-settings'}
              size={100}
              color={'#45C5F0'}
            />
          </View>

          <View style={styles.TextInputContainer}>
            <View style={styles.gap}>
              <TextInput
                color={emailErrorColor}
                variant="outlined"
                placeholder="Email"
                leading={props => (
                  <MaterialIcons
                    name={'mail'}
                    size={25}
                    solid
                    color={emailErrorColor}
                  />
                )}
                onChangeText={email => setEmail(email)}
              />

              <Text style={styles.error}>{emailError}</Text>
            </View>
            <View style={styles.gap}>
              <TextInput
                style={{width: 310}}
                color={passwordErrorColor}
                variant="outlined"
                placeholder="Password"
                keyboardType="password"
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
                leading={props => (
                  <MaterialIcons
                    name={'vpn-key'}
                    size={25}
                    solid
                    color={passwordErrorColor}
                  />
                )}
              />
              <Text style={styles.error}>{passwordError}</Text>
            </View>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.customButtonContainer}
              onPress={
                checkValidation
                // navigation.navigate('Dash_board')
                // ToastAndroid.show('Logged in Successful', ToastAndroid.SHORT)
              }>
              {!loader ? (
                <Text style={styles.customButtonTitle}>Login</Text>
              ) : (
                <ActivityIndicator size="small" color="#ffffff" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
