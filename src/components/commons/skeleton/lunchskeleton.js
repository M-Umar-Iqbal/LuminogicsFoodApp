//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// create a component
const Skeleton = () => {
  const array = [1, 2, 3];
  return (
    <ScrollView>
      {array.map((e, i) => (
        <View
          key={i}
          style={{
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            borderTopLeftRadius: 20,
            marginLeft: 16,
            marginRight: 16,
            marginTop: 15,
            marginBottom: 10,
            overflow: 'hidden',
          }}>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.2)',
              padding: 10,
            }}>
            <SkeletonPlaceholder speed={1000}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    marginLeft: 10,
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                  }}
                />
                <View
                  style={{
                    height: 25,
                    width: 150,
                    marginLeft: 10,
                    marginTop: 16,
                  }}
                />
                <View
                  style={{
                    height: 25,
                    width: 25,
                    marginLeft: 100,
                    marginTop: 16,
                  }}
                />
              </View>
            </SkeletonPlaceholder>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.1)',
              padding: 10,
            }}>
            <SkeletonPlaceholder speed={1000}>
              <View>
                <View style={{height: 20, width: 210}} />
                <View style={{height: 20, width: 90, marginTop: 5}} />
                <View
                  style={{
                    height: 2,
                    width: '100%',
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                />
                <View style={{height: 15, width: 250}} />
                <View style={{height: 20, width: 90, marginTop: 5}} />
              </View>
            </SkeletonPlaceholder>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

// define your styles

//make this component available to the app
export default Skeleton;
