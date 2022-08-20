import React from 'react';
import {StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import login from 'D:/nativeApp/src/components/Home';
import Login from '../../components/Login';
import Dashboard from '../../components/Dashboard';
import EveningTea from '../../components/eveningTeaGenerateReport';
import MorningTea from '../../components/morningTeaGenerateReport';
import Profile from '../../components/profile';
import Lunch from '../../components/Lunch';
import {colors} from '../../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="dashBoard"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: 'Admin Login',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="dashBoard"
        component={Dashboard}
        options={{
          // headerStyle: {
          //   backgroundColor: '#45C5F0',
          // },
          title: 'Dashboard',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.lightGrey,
          },
          headerTintColor: colors.lightGrey,
          // headerShown: true,
          // headerBackVisible: false,
          // headerRight: () => (
          //   <TouchableOpacity onPress={() => storeData('null')}>
          //     <MaterialIcons name={'logout'} size={30} color={colors.main} />
          //   </TouchableOpacity>
          // ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: colors.main,
          },
          headerTitleStyle: {
            color: colors.lightGrey,
          },
          headerTintColor: colors.lightGrey,

          title: 'Profile',
          headerTitleAlign: 'center',
          headerShown: true,
          // headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="EveningTea"
        component={EveningTea}
        options={{
          headerStyle: {
            backgroundColor: colors.main,
          },
          headerTitleStyle: {
            color: colors.lightGrey,
          },
          headerTintColor: colors.lightGrey,
          title: 'Evening Tea',
          headerTitleAlign: 'center',
          headerShown: true,
          // headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="MorningTea"
        component={MorningTea}
        options={{
          headerStyle: {
            backgroundColor: colors.main,
          },
          headerTitleStyle: {
            color: colors.lightGrey,
          },
          headerTintColor: colors.lightGrey,
          title: 'Morning Tea',
          headerTitleAlign: 'center',
          headerShown: true,
          // headerBackVisible: false,
        }}
      />

      <Stack.Screen
        name="Lunch"
        component={Lunch}
        options={{
          headerStyle: {
            backgroundColor: colors.main,
          },
          title: 'Launch',
          headerTitleAlign: 'center',
          headerShown: true,
          // headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
  },
  button: {
    width: '10%',
  },
  customButtonContainer: {
    backgroundColor: 'green',
    padding: 10,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButtonTitle: {
    color: 'white',
    fontWeight: '400',
  },
});
