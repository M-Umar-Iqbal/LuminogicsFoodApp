import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import getStyles from './style';
import CheckBox from '@react-native-community/checkbox';
import {Center} from 'native-base';
export default function LunchCard() {
  const styles = getStyles();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [disable, setDisable] = useState(toggleCheckBox);
  const [complete, setComplete] = useState('white');
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <Text
          style={[styles.title, {textTransform: 'uppercase', color: complete}]}>
          Umar Iqbal
        </Text>
        <CheckBox
          disabled={disable}
          value={toggleCheckBox}
          onValueChange={newValue => {
            setToggleCheckBox(newValue);
            setDisable(!toggleCheckBox);
            setComplete('#000000');
          }}
        />
        {/* {console.log(toggleCheckBox)} */}
      </View>
      <View style={styles.details}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Paid Amount:</Text>
          <Text> 500 Rupee</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Roti: </Text>
          <Text> 5 </Text>
        </View>
        <Text
          style={[
            styles.description,
            {
              borderTopWidth: 1,
              borderTopColor: 'white',
              marginTop: 10,
              paddingTop: 10,
            },
          ]}>
          Description: Khamiri Roti or 1 liter wali bottle abcd Description:
          Khamiri Roti or 1 liter wali bottle abcdDescription: Khamiri Roti or 1
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
