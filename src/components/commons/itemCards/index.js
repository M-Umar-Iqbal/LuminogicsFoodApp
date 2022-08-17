import React from 'react';
import {View, Text, TouchableOpacity, Touchable} from 'react-native';
import getStyles from './style';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Card({
  Title = 'Title Not Available',
  img = 'pizza-slice',
  color = 'grey',
  onPress = () => console.log('Nothing'),
}) {
  const styles = getStyles();
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <FontAwesome5 name={img} size={30} color={color} />
        <Text style={styles.title}>{Title}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Card;
