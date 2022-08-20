import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/constants';

const getStyles = () =>
  StyleSheet.create({
    listTitle: {color: colors.black, fontWeight: '800', fontSize: 20},
    listSubTitle: {color: colors.black, fontWeight: '400', fontSize: 15},
    container: {
      marginTop: 15,
      marginLeft: 16,
      marginRight: 16,
      marginBottom: 10,
      overflow: 'hidden',
      borderRadius: 12,
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
