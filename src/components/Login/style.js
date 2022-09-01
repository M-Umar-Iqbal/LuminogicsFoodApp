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
      color: colors.main,
      fontSize: 30,
      fontWeight: '700',
    },

    customButtonContainer: {
      marginTop: 2,
      elevation: 5,
      borderColor: colors.babyBlue,
      borderWidth: 4,
      borderRadius: 10,
    },
    gap: {
      marginTop: 8,
      marginBottom: 8,
    },
    error: {
      marginLeft: 5,
      color: 'red',
      fontSize: 14,
      fontWeight: '600',
    },
  });
export default styles;
