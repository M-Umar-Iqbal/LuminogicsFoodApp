//import liraries
// import { TextInput } from '@react-native-material/core';
import {TextInput} from 'react-native';

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconButton} from '@react-native-material/core';
import {colors} from '../../../constants/constants';
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

  return (
    <View style={styles.container}>
      {/* <TextInput
        color={color}
        label="Label"
        variant="outlined"
        leading={props => (
          <IconButton
            icon={props => (
              <MaterialIcons
                // style={{paddingBottom: 10}}
                name={icon}
                size={iconSize}
                solid
                color={color}
              />
            )}
            {...props}
          />
        )}
      /> */}
      {/* My Text input */}
      {/* <TextInput
        textAlignVertical="center"
        label={placeholder}
        variant={variant}
        color={color}
        leading={props => (
          <MaterialIcons
            // style={{paddingBottom: 10}}
            name={icon}
            size={iconSize}
            solid
            color={color}
          />
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
      /> */}

      <View
        style={{
          borderRadius: 12,
          backgroundColor: '#ffffff',
          flexDirection: 'row',
          marginBottom: 5,
          height: 60,
          borderColor: color,
          borderWidth: 2,
          width: 370,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '15%',
          }}>
          <MaterialIcons name={icon} size={iconSize} solid color={color} />
        </View>
        <View style={{width: '70%'}}>
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
          style={{
            width: '15%',
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
export default InputField;
