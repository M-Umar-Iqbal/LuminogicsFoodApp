import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import getStyles from './style';
export default function FlatDataList({Data}) {
  const styles = getStyles();
  return (
    <FlatList
      data={Data}
      renderItem={element => {
        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // backgroundColor: 'red',
              padding: 15,
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
            }}>
            <View style={{width: '50%'}}>
              <Text
                style={[
                  styles.listTitle,
                  {fontSize: 17, textTransform: 'capitalize'},
                ]}>
                {element.item.employeeName}
              </Text>
            </View>
            <View style={{width: '35%', alignItems: 'center'}}>
              <Text style={styles.listTitle}>{element.item.teaVolume}</Text>
            </View>
            <View style={{width: '15%', alignItems: 'center'}}>
              <Text style={styles.listTitle}>
                {element.item.sugerQuantity ? element.item.sugerQuantity : 0}
              </Text>
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});
