import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import getStyles from './style';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../../constants/constants';

export default function FlatDataList({Data}) {
  const styles = getStyles();
  return (
    <FlatList
      data={Data}
      renderItem={element => {
        return (
          <View
            style={{
              marginLeft: 16,
              marginRight: 16,
              marginBottom: 15,
              overflow: 'hidden',
              borderRadius: 12,
            }}>
            <View
              style={{
                backgroundColor: colors.main,
                padding: 20,
                justifyContent: 'center',
              }}>
              <Text style={[styles.listTitle, {color: 'white'}]}>
                {element.item.employeeName}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{backgroundColor: colors.black, padding: 10}}>
                {/* {element.item.teaVolume === 'Half Cup' ? (
                  <SimpleLineIcons name={'cup'} size={50} color={colors.main} />
                ) : (
                  <SimpleLineIcons
                    name={'cup'}
                    size={50}
                    color={colors.black}
                  />
                )} */}
              </View>
              <View
                style={{
                  backgroundColor: colors.lightGrey,
                  width: '100%',
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <Text style={styles.listTitle}>{element.item.teaVolume}</Text>
                <Text style={styles.listTitle}>
                  Sugar:{' '}
                  {element.item.sugerQuantity ? element.item.sugerQuantity : 0}
                </Text>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});
