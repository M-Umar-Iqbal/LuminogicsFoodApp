import {firstChild} from '@react-native-material/core';
import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/constants';

const getStyles = () =>
  StyleSheet.create({
    listTitle: {color: colors.black, fontWeight: '800', fontSize: 20},
    listSubTitle: {color: colors.black, fontWeight: '400', fontSize: 15},
    container: {
      marginLeft: 16,
      marginRight: 16,
      marginBottom: 7,
      marginTop: 7,
      overflow: 'hidden',
      borderRadius: 12,
      elevation: 5,
    },
    heading: {
      backgroundColor: colors.main,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    absoluteFull: {
      position: 'absolute',
      top: 32,
      width: 37,
      height: 17,
      borderBottomRightRadius: 11,
      borderBottomLeftRadius: 11,
      backgroundColor: colors.main,
    },
    absoluteHalf: {
      position: 'absolute',
      top: 23,
      width: 37,
      height: 29,
      borderBottomRightRadius: 11,
      borderBottomLeftRadius: 11,
      backgroundColor: colors.main,
    },
  });

export default getStyles;
