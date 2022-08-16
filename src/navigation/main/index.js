import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../components/Home';
import {Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Component</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <Text style={styles.title}>Go To Profile Screen</Text>
      </TouchableOpacity>
      <View style={{width: '50%'}}>
        <Button
          title="Go to Options"
          onPress={() => navigation.navigate('options')}
        />
      </View>
    </View>
  );
};

const Options = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Options Component</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();
export function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="home"
        component={Home}
        options={{title: 'Home', headerTitleAlign: 'center'}}
      />
      <Tab.Screen
        name="options"
        component={Options}
        options={{title: 'Options', headerTitleAlign: 'center'}}
      />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{title: 'Home', headerTitleAlign: 'center'}}
      />

      <Stack.Screen
        name="ProfileScreen"
        component={HomeScreen}
        options={{
          title: 'Profile',
          headerTitleAlign: 'center',
          headerShown: true,
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
    backgroundColor: 'red',
  },
});
