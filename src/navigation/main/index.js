import React from 'react';

import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from 'react-native';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <View>
      <Text>Home Component</Text>
    </View>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="home"
          component={Home}
          options={{title: 'Home', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
