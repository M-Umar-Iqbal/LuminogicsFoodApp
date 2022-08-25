//import liraries
// import { TextInput } from '@react-native-material/core';
import {TextInput} from 'react-native';

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconButton} from '@react-native-material/core';
import {colors} from '../../../constants/constants';
import getStyles from './style';
// create a component
const InputField = ({
  placeholder,
  color,
  icon,
  setText,
  iconSize = 25,
  Type,
  secure,
  rightIcon,
}) => {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const styles = getStyles(color);
  return (
    <View style={styles.inputFieldContainer}>
      <View
        flex={1.5}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialIcons name={icon} size={iconSize} solid color={color} />
      </View>
      <View flex={7}>
        <TextInput
          style={{height: 60}}
          title="ok"
          color={'black'}
          placeholder={placeholder}
          placeholderTextColor={colors.darkGrey}
          onChangeText={e => setText(e.toLowerCase())}
          keyboardType={Type}
          secureTextEntry={secure && isPasswordSecure}
        />
      </View>
      <View
        flex={1.5}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {rightIcon === 'remove-red-eye' && (
          <MaterialCommunityIcons
            name={isPasswordSecure ? 'eye-off' : 'eye'}
            size={iconSize}
            solid
            color={colors.darkGrey}
            onPress={() => {
              isPasswordSecure
                ? setIsPasswordSecure(false)
                : setIsPasswordSecure(true);
            }}
          />
        )}
      </View>
    </View>
  );
};

//make this component available to the app
export default InputField;
