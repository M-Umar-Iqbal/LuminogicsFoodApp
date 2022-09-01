import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/constants';

const getStyles = () =>
  StyleSheet.create({
    title: {
      color: colors.black,
      fontWeight: '700',
      fontSize: 15,
    },
    description: {
      color: colors.black,
      fontSize: 16,
      paddingBottom: 10,
      textTransform: 'capitalize',
    },
    container: {
      marginTop: 15,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
      borderTopLeftRadius: 20,
      overflow: 'hidden',
      elevation: 5,
    },
    header: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      padding: 10,
      backgroundColor: colors.main,
    },
    details: {
      padding: 12,
      backgroundColor: colors.lightGrey,
    },
    imgStyle: {
      width: 55,
      height: 55,
      borderRadius: 55 / 2,
      borderColor: colors.lightGrey,
      borderWidth: 2,
    },
  });
export default getStyles;
