import {StyleSheet} from 'react-native';
import {colors} from '../../constants/constants';

const getStyles = () =>
  StyleSheet.create({
    container: {
      paddingTop: 20,
      flex: 1,
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      flexWrap: 'wrap',
      // backgroundColor: 'grey',
    },
  });
export default getStyles;
