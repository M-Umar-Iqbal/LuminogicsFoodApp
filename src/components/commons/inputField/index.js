//import liraries
import {TextInput} from '@react-native-material/core';

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../../constants/constants';
// create a component
const MyComponent = ({
  placeholder,
  variant,
  color,
  icon,
  setText,
  iconSize = 25,
  Type,
  secure,
  rightIcon,
}) => {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        textAlignVertical="center"
        placeholder={placeholder}
        variant={variant}
        color={color}
        leading={props => (
          <MaterialIcons name={icon} size={iconSize} solid color={color} />
        )}
        trailing={props =>
          rightIcon === 'remove-red-eye' && (
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
          )
        }
        onChangeText={e => setText(e.toLowerCase())}
        keyboardType={Type}
        secureTextEntry={secure && isPasswordSecure}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 370,
  },
});

//make this component available to the app
export default MyComponent;
