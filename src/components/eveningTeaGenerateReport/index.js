import React from 'react';
import {Text, View} from 'react-native';
import getStyles from './style';
const TeaGenerateReport = () => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center'}}>
        <Text style={styles.title}>Evening Tea Requirements</Text>
      </View>
      <Text style={styles.title}>Monday 17-Aug-2022</Text>
      <Text style={styles.title}>No. of Cups: 20</Text>
    </View>
  );
};
export default TeaGenerateReport;
