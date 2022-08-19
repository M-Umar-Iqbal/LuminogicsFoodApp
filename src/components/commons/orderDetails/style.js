import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/constants';

const getStyles = () =>
  StyleSheet.create({
    title: {
      color: 'black',
    },

    title: {
      color: colors.black,
    },
    mainHeading: {
      color: 'white',
      fontSize: 20,
      fontWeight: '800',
      padding: 10,
      borderWidth: 1,
      borderColor: 'thistle',
      borderRadius: 10,
    },
    subHeading: {
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
      fontFamily: 'roboto',
    },
  });
export default getStyles;
