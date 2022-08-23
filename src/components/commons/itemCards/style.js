import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/constants';
const getStyles = () =>
  StyleSheet.create({
    // title: {
    //   color: colors.black,
    //   fontSize: 20,
    //   fontWeight: '400',
    //   padding: 10,
    // },
    // container: {
    //   margin: 16,
    //   width: 350,
    //   height: 190,
    //   overflow: 'hidden',
    //   borderTopRightRadius: 20,
    //   borderBottomRightRadius: 20,
    //   flexDirection: 'row',
    //   backgroundColor: colors.lightGrey,
    // },

    cardContainer: {
      padding: 20,
      width: '49%',
      marginBottom: 9,
      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor: '#ffffff',
      justifyContent: 'space-between',
      borderRadius: 30,
    },
  });
export default getStyles;
