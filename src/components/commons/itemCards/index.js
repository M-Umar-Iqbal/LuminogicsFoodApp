import React from 'react';
import {View, Text, TouchableOpacity, Touchable} from 'react-native';
import getStyles from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
  let colorLightGrey = colors.darkGrey;
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
      <View flex={8} style={{justifyContent: 'center', alignItems: 'center'}}>
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
          <Text
            style={{
              textAlign: 'center',
              color: colorBlack,
              marginTop: 10,
              width: 160,
            }}>
            {helperText}
          </Text>
        </View>
      </View>
      <View flex={2}>
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          style={{
            flexGrow: 1,
            backgroundColor: colorLightGrey,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="arrowright" size={30} color={colors.lightGrey} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Card;
