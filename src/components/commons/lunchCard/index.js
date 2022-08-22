import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import getStyles from './style';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../../constants/constants';

export default function LunchCard({
  Name = 'unknown User ',
  paidAmount = 0,
  totalRoti = 0,
  description = 'Empty',
}) {
  const styles = getStyles();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [disable, setDisable] = useState(toggleCheckBox);
  const [complete, setComplete] = useState('white');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <FontAwesome5 name={'user-circle'} size={35} color={complete} /> */}
        <Text
          style={[
            styles.title,
            {
              textTransform: 'uppercase',
              color: complete,
              fontSize: 17,
              marginLeft: 5,
            },
          ]}>
          {Name}
        </Text>
        <CheckBox
          disabled={disable}
          value={toggleCheckBox}
          onValueChange={newValue => {
            setToggleCheckBox(newValue);
            setDisable(!toggleCheckBox);
            setComplete(colors.black);
          }}
        />
      </View>
      <View style={styles.details}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Paid Amount</Text>
          <Text style={{color: colors.black}}> {paidAmount} Rupee</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Roti : </Text>
          <Text style={{color: colors.black}}> {totalRoti} </Text>
        </View>
        <Text
          style={[
            styles.description,
            {
              borderTopWidth: 3,
              borderTopColor: 'white',
              marginTop: 10,
              paddingTop: 7,
              fontSize: 15,
              fontWeight: '500',
              lineHeight: 20,
            },
          ]}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
