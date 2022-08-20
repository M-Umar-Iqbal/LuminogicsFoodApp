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
    cardText: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 30,
      padding: 10,
      paddingBottom: 20,
      paddingTop: 20,
    },
    cardContainer: {
      margin: 20,
    },

    cardTitle: {
      color: 'black',
      fontWeight: '500',
      fontSize: 20,
    },
    largeTitle: {
      color: 'black',
      fontSize: 40,
      fontWeight: '700',
    },
    smallTitle: {
      color: 'grey',
      fontSize: 15,
      fontWeight: '500',
    },
    HeadingContainer: {
      paddingTop: 40,
      paddingLeft: 20,
    },
    customButtonContainer: {
      marginTop: 5,
      backgroundColor: colors.main,
      padding: 20,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 10,
    },
    customButtonTitle: {
      color: 'white',
      fontWeight: '700',
      textTransform: 'uppercase',
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
