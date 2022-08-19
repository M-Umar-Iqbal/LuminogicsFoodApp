import React from 'react';
import {View, Text, TouchableOpacity, Touchable} from 'react-native';
import getStyles from './style';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../../../constants/constants';

function Card({
  Title = 'Title Not Available',
  img = 'pizza-slice',
  color = 'grey',
  onPress = () => console.log('No Screen Available'),
  helperText = 'Helper Text Not Available',
}) {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '30%',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 10,
        }}>
        <FontAwesome5 name={img} size={50} color={color} />
      </View>
      <View
        style={{
          width: '55%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            width: '60%',
            fontWeight: '700',
            textAlign: 'left',
          }}>
          {Title}
        </Text>
        <Text
          numberOfLines={6}
          style={{
            textAlign: 'left',
            width: '60%',
            color: 'black',
            fontSize: 15,
            flexWrap: 'wrap',
          }}>
          {helperText}
        </Text>
      </View>
      <TouchableOpacity onPress={onPress} style={{width: '15%'}}>
        <View
          style={{
            backgroundColor: colors.darkGrey,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Entypo name="chevron-thin-right" size={30} color={color} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default Card;
