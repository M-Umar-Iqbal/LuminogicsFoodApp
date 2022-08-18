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
import MaterialIcons from 'react-native-vector-icons/Ionicons';
import InputField from '../commons/inputField';
export default function Home({navigation}) {
  const styles = getStyles();
  const [emailErrorColor, setEmailErrorColor] = useState('#E68653');
  const [passwordErrorColor, setPasswordErrorColor] = useState('#E68653');
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
      setEmailErrorColor('#E68653');
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
      setPasswordErrorColor('#E68653');
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
        ToastAndroid.show('Logged in Successful', ToastAndroid.SHORT);
        navigation.navigate('Dash_board');
      }, 500);
    } else {
      Keyboard.dismiss();
    }
  }

  return (
    <View flex={1}>
      <View style={styles.cardText}>
        <MaterialIcons
          name={'fast-food-outline'}
          size={150}
          color={'#E68653'}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.TextInputContainer}>
            <View style={styles.gap}>
              <InputField
                placeholder="email"
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
          </View>
          <View style={styles.gap}>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.customButtonContainer}
                onPress={checkValidation}>
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
    </View>
  );
}

const styles = StyleSheet.create({});
