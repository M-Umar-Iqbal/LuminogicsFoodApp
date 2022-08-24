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
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const styles = getStyles();

  return (
    <View flex={1}>
      <View
        style={{
          padding: 25,
          backgroundColor: colors.lightGrey,
          elevation: 5,
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
              ? today.getDate() +
                '-' +
                monthNames[today.getMonth()] +
                '-' +
                today.getFullYear()
              : date}
          </Text>
        </View>
        <Divider style={{marginTop: 12, marginBottom: 20}} leadingInset={0} />
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

        <Text
          style={[
            styles.subHeading,
            {color: colors.black, fontSize: 16, fontWeight: 'bold'},
          ]}>
          Total {item} : {total}
        </Text>
      </View>
    </View>
  );
}
