import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/constants';
export default function LoadingIndicator() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
        Nothing To Display
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'red',
          height: 50,
          width: 100,
        }}>
        <Text style={{color: 'black', fontSize: 15}}>Loading </Text>
        <ActivityIndicator
          size={15}
          color={colors.main}
          style={{marginLeft: 5}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
