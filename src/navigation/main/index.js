import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../../screens/main/Home';
const Navigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};
export default Navigation;
