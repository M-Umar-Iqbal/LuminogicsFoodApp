import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../../screens/main/Home';
import {View, Text, SafeAreaView} from 'react-native';
const Navigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView>
      <View>
        <Text>Navigation Page</Text>
      </View>
    </SafeAreaView>
  );
};
export default Navigation;
