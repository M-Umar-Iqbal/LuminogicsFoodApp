import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import getStyles from './style';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/EvilIcons';
import {colors} from '../../../constants/constants';

export default function LunchCard({
  Name = 'unknown User',
  paidAmount = 0,
  totalRoti = 0,
  description,
  img,
}) {
  const styles = getStyles();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View flex={2} style={{justifyContent: 'center'}}>
          {img ? (
            <Image
              style={styles.imgStyle}
              source={{
                uri: img,
              }}
            />
          ) : (
            <Image
              style={styles.imgStyle}
              source={require('../../../assets/images/dp.png')}
            />
          )}
        </View>

        <View
          flex={7}
          style={{
            justifyContent: 'center',
            paddingLeft: 10,
            alignItems: 'flex-start',
          }}>
          <Text
            style={[
              styles.title,
              {
                textTransform: 'capitalize',
                color: colors.lightGrey,
                fontSize: 19,
              },
            ]}>
            {Name}
          </Text>
        </View>
        <View flex={1} style={{justifyContent: 'center', alignItems: 'center'}}>
          <CheckBox
            value={toggleCheckBox}
            onValueChange={newValue => {
              setToggleCheckBox(newValue);
            }}
          />
        </View>
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

        {description && (
          <Text
            style={{
              borderTopWidth: 3,
              borderTopColor: 'white',
              color: 'black',
              marginTop: 10,
              paddingTop: 7,
              fontSize: 15,
              fontWeight: '700',
              lineHeight: 20,
            }}>
            Description
          </Text>
        )}
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
