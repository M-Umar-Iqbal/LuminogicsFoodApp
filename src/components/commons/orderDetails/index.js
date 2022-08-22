import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Divider} from '@react-native-material/core';
import React, {useEffect, useState} from 'react';
import getStyles from './style';
import {colors} from '../../../constants/constants';
import Fontisto from 'react-native-vector-icons/Fontisto';
const today = new Date();

export default function orderDetail({
  title = 'Unknown Title',
  date = '00/00/0000',
  item = 'items',
  total = 0,
  fullCups = null,
  halfCups = null,
}) {
  const styles = getStyles();
  const [flex, setFlex] = useState(3);
  useEffect(() => {
    item === 'Roti' ? setFlex(2) : setFlex(3);
  }, []);

  return (
    <View flex={flex}>
      {/* <View style={styles.detailContainer}>
        <View style={{alignItems: 'center', padding: 15}}>
          <Text style={styles.mainHeading}>{title}</Text>
        </View>
        <View style={{padding: 2, alignItems: 'center'}}>
          <Text style={styles.subHeading}>{date ? date : 'Loading ...'}</Text>
        </View>
      </View> */}

      <View
        style={{
          padding: 25,
          backgroundColor: colors.lightGrey,
          elevation: 10,
        }}>
        <View
          style={{
            padding: 2,
            alignItems: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Fontisto name={'date'} size={30} color={colors.main} />
          <Text style={[styles.subHeading, {fontSize: 25, marginLeft: 20}]}>
            {date
              ? date
              : today.getDate() +
                '/' +
                (today.getMonth() + 1) +
                '/' +
                today.getFullYear()}
          </Text>
        </View>
        <Divider style={{marginTop: 20, marginBottom: 20}} leadingInset={0} />
        {item !== 'Roti' ? (
          <View>
            <Text
              style={[styles.subHeading, {color: colors.black, fontSize: 12}]}>
              Full Cups: {fullCups}
            </Text>
            <Text
              style={[styles.subHeading, {color: colors.black, fontSize: 12}]}>
              Half Cups: {halfCups}
            </Text>
            <Divider
              style={{marginTop: 20, marginBottom: 10}}
              leadingInset={0}
            />
          </View>
        ) : null}

        <Text style={[styles.subHeading, {color: colors.black, fontSize: 12}]}>
          Total {item} : {total}
        </Text>
      </View>
    </View>
  );
}
