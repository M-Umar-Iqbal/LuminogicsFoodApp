import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import HomeScreen from 'D:/nativeApp/src/components/Home';
import HomeScreen from '../../components/Login';
import Dashboard from '../../components/Dashboard';
import EveningTea from '../../components/eveningTeaGenerateReport';
import MorningTea from '../../components/morningTeaGenerateReport';

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Login"
        component={HomeScreen}
        options={{title: 'Home', headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="ProfileScreen"
        component={HomeScreen}
        options={{
          title: 'Admin Login',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Dash_board"
        component={Dashboard}
        options={{
          // headerStyle: {
          //   backgroundColor: '#45C5F0',
          // },

          title: 'Dashboard',
          headerTitleAlign: 'center',
          headerShown: true,
          headerBackVisible: false,
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('Logout')}>
              <MaterialIcons name={'logout'} size={30} color={'black'} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="EveningTea"
        component={EveningTea}
        options={{
          // headerStyle: {
          //   backgroundColor: '#45C5F0',
          // },

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
          // headerStyle: {
          //   backgroundColor: '#45C5F0',
          // },
          title: 'Morning Tea',
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
