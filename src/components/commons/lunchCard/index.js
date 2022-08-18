import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import getStyles from './style';
import CheckBox from '@react-native-community/checkbox';

export default function LunchCard({
  Name = 'unKnown User',
  paidAmount = 0,
  totalRoti = 0,
  description = 'NULL',
}) {
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
          {Name}
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
          <Text> {paidAmount} Rupee</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Roti: </Text>
          <Text> {totalRoti} </Text>
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
          Description: {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
