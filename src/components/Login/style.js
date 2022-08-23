import {StyleSheet} from 'react-native';
import {colors} from '../../constants/constants';
const styles = () =>
  StyleSheet.create({
    cardText: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      marginBottom: 40,
    },

    mainInputFieldsContainer: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 20,
    },
    logoText: {
      marginTop: 5,
      color: colors.main,
      fontSize: 50,
      fontWeight: '900',
    },
    title: {
      color: 'black',
      fontSize: 20,
    },

    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    loginText: {
      marginBottom: 10,
      color: colors.black,
      fontSize: 30,
      fontWeight: '800',
      // fontFamily: 'Helvetica',
    },

    customButtonContainer: {
      marginTop: 5,
      elevation: 10,
      borderRadius: 12,
    },

    gap: {
      marginTop: 7,
      marginBottom: 7,
    },
    error: {
      color: 'red',
      fontSize: 13,
      fontWeight: '500',
    },
  });
export default styles;
