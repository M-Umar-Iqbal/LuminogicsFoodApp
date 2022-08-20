import React from 'react';
import {Text, View} from 'react-native';
import getStyles from './style';
const login = () => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
};
export default login;
