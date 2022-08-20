//import liraries
import {TextInput} from '@react-native-material/core';
import {position} from 'native-base/lib/typescript/theme/styled-system';
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
  errorMsg,
}) => {
  const [remove, setRemove] = useState();

  return (
    <View style={[styles.container, {position: 'relative'}]}>
      <TextInput
        placeholder={placeholder}
        variant={variant}
        color={color}
        leading={props => (
          <MaterialIcons name={icon} size={iconSize} solid color={color} />
        )}
        onChangeText={e => setText(e.toLowerCase())}
        keyboardType={Type}
        secureTextEntry={secure}
      />

      {/* <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 39,
          height: 45,
          position: 'absolute',
          right: 2,
          top: 2.5,
          backgroundColor: 'white',
        }}>
        <MaterialIcons name={rightIcon} size={iconSize} solid color={'grey'} />
      </View> */}
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
