import {StyleSheet} from 'react-native';
import {colors} from '../../constants/constants';

const getStyles = () =>
  StyleSheet.create({
    mainContainer: {
      marginTop: 10,
      marginBottom: 20,
      marginLeft: 16,
      marginRight: 16,
      justifyContent: 'space-between',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });
export default getStyles;
