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
        const employeeName = element.item.employeeName;
        return (
          <View style={styles.container}>
            <View style={styles.heading}>
              <Text
                style={[
                  styles.listTitle,
                  {color: colors.lightGrey, textTransform: 'capitalize'},
                ]}>
                {employeeName.replace('_', ' ').replace('-', ' ')}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{backgroundColor: colors.lightGrey, padding: 20}}>
                {element.item.teaVolume === 'Half Cup' ? (
                  <View style={{position: 'relative'}}>
                    <SimpleLineIcons
                      name={'cup'}
                      size={50}
                      color={colors.main}
                    />
                    <View style={styles.absoluteFull} />
                  </View>
                ) : (
                  <View style={{position: 'relative'}}>
                    <SimpleLineIcons
                      name={'cup'}
                      size={50}
                      color={colors.main}
                    />
                    <View style={styles.absoluteHalf} />
                  </View>
                )}
              </View>
              <View
                style={{
                  backgroundColor: colors.lightGrey,
                  width: '100%',
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <Text style={styles.listSubTitle}>
                  {element.item.teaVolume}
                </Text>
                <Text style={styles.listSubTitle}>
                  Sugar Quantity:
                  {element.item.sugerQuantity
                    ? ' ' + element.item.sugerQuantity
                    : ' N/A'}
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
