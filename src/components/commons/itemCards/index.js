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
  let colorDarkGrey = colors.darkGrey;
  let colorBlack = colors.black;
  const styles = getStyles();
  {
    disabled
      ? ((color = colors.lightGrey),
        (colorDarkGrey = colors.disabledGrey),
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
            backgroundColor: colorDarkGrey,
            borderRadius: 20,
            marginTop: 20,
            padding: 10,
          }}>
          <Entypo name="chevron-thin-right" size={25} color={color} />
        </View>
      </TouchableOpacity>
    </View>

    // <View style={[styles.container, {elevation: disabled ? 0 : 10}]}>
    //   <View
    //     style={{
    //       backgroundColor: 'white',
    //       height: '100%',
    //       width: '30%',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       elevation: 10,
    //     }}>
    //     <FontAwesome5 name={img} size={50} color={color} />
    //   </View>
    //   <View
    //     style={{
    //       width: '55%',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}>
    //     <Text
    //       style={{
    //         color: colorBlack,
    //         fontSize: 15,
    //         width: '60%',
    //         fontWeight: '700',
    //         textAlign: 'left',
    //       }}>
    //       {Title}
    //     </Text>
    //     <Text
    //       numberOfLines={6}
    //       style={{
    //         textAlign: 'left',
    //         width: '60%',
    //         color: colorBlack,
    //         fontSize: 15,
    //         flexWrap: 'wrap',
    //       }}>
    //       {helperText}
    //     </Text>
    //   </View>
    //   <TouchableOpacity
    //     onPress={onPress}
    //     style={{width: '15%'}}
    //     disabled={disabled}>
    //     <View
    //       style={{
    //         backgroundColor: colorDarkGrey,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         height: '100%',
    //       }}>
    //       <Entypo name="chevron-thin-right" size={30} color={color} />
    //     </View>
    //   </TouchableOpacity>
    // </View>
  );
}
export default Card;
