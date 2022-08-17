import React from 'react';
import {Text, View} from 'react-native';
import getStyles from './style';
const TeaGenerateReport = () => {
  const styles = getStyles();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.title}>Morning Tea</Text>
    </View>
  );
};
export default TeaGenerateReport;
