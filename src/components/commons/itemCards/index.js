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
  onPress = () => 'No Screen Available',
  helperText = 'Helper Text Not Available',
  disabled = false,
}) {
  let colorLightGrey = colors.royalBlue;
  let colorBlack = colors.black;
  const styles = getStyles();
  {
    disabled
      ? ((color = colors.lightGrey),
        (colorLightGrey = colors.disabledGrey),
        (colorBlack = colors.disabledGrey))
      : color;
  }
  return (
    <View style={styles.cardContainer}>
      <View>
        <FontAwesome5 name={img} size={50} color={color} />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 20,
            color: colorBlack,
          }}>
          {Title}
        </Text>
        <Text style={{textAlign: 'center', color: colorBlack}}>
          {helperText}
        </Text>
      </View>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View
          style={{
            backgroundColor: colorLightGrey,
            borderRadius: 10,
            marginTop: 20,
            padding: 7,
          }}>
          <Entypo
            name="chevron-thin-right"
            size={27}
            color={colors.lightGrey}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default Card;
