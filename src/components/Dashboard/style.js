import {StyleSheet} from 'react-native';
import {colors} from '../../constants/constants';

const getStyles = () =>
  StyleSheet.create({
    mainContainer: {
      marginTop: 20,

      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'space-between',
    },
  });
export default getStyles;
