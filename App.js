import React from 'react';
import Navigation from './src/navigation/main';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
const App = () => {
  return (
    <View>
      <Navigation />
    </View>
  );
};

export default App;
