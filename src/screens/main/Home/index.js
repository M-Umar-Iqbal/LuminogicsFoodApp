import React from 'react';
import {useTheme} from 'native-base';
import {Text, View} from 'react-native';
import getStyles from './style';
const HomeScreen = () => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
};
export default HomeScreen;
