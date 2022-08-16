import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import getStyles from './style';
import {Stack, TextInput, IconButton} from '@react-native-material/core';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Navigation} from '@mui/icons-material';

export default function Home({navigation}) {
  const {colors} = useTheme();

  const styles = getStyles(colors);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Alert.alert('Alert Title', 'My Alert Msg', [
  //   {
  //     text: 'Cancel',
  //     onPress: () => console.log('Cancel Pressed'),
  //     style: 'cancel',
  //   },
  //   {text: 'OK', onPress: () => console.log('OK Pressed')},
  // ]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        {/* <ArrowUpCircle /> */}
        <View style={styles.cardText}>
          {/* <Text style={styles.cardTitle}>Admin Login </Text> */}
          <MaterialIcons
            name={'admin-panel-settings'}
            size={100}
            color={'black'}
          />
        </View>

        <View style={styles.TextInputContainer}>
          <TextInput
            color="#3873A6"
            variant="outlined"
            placeholder="Email"
            leading={props => (
              <MaterialIcons name={'mail'} size={25} solid color={'black'} />
            )}
            onChangeText={email => setEmail(email)}
          />
          <TextInput
            style={{width: 310}}
            color="#3873A6"
            variant="outlined"
            placeholder="Password"
            keyboardType="password"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
            leading={props => (
              <MaterialIcons name={'vpn-key'} size={25} solid color={'black'} />
            )}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.customButtonContainer}
            onPress={
              () => navigation.navigate('Dash_board')
              // ToastAndroid.show('Logged in Successful', ToastAndroid.SHORT)
            }>
            <Text style={styles.customButtonTitle}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{email}</Text>
        <Text style={styles.title}>{password}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
