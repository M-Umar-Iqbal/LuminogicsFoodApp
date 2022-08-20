import {StyleSheet} from 'react-native';
import {colors} from '../../constants/constants';
const styles = () =>
  StyleSheet.create({
    title: {
      color: 'black',
      fontSize: 20,
    },
    mainContainer: {
      alignItems: 'center',
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoText: {
      marginTop: 5,
      color: colors.main,
      fontSize: 50,
      fontWeight: '900',
      // fontFamily: 'Helvetica',
    },
    loginText: {
      marginBottom: 10,
      color: colors.black,
      fontSize: 30,
      fontWeight: '800',
      // fontFamily: 'Helvetica',
    },
    cardText: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 50,
      marginBottom: 50,
    },
    cardContainer: {
      marginLeft: 16,
      marginRight: 16,
    },

    customButtonContainer: {
      marginTop: 10,
      // padding: 20,

      justifyContent: 'center',
      alignItems: 'center',
      elevation: 20,
      borderRadius: 5,
    },
    customButtonTitle: {
      fontSize: 15,
      color: 'white',
      fontWeight: '400',
      textTransform: 'capitalize',
    },
    gap: {
      marginTop: 5,
      marginBottom: 5,
    },
    error: {
      color: 'red',
      fontSize: 13,
      fontWeight: '500',
    },
  });
export default styles;
