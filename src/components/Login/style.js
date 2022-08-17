import {StyleSheet} from 'react-native';
const styles = () =>
  StyleSheet.create({
    title: {
      color: 'black',
      fontSize: 20,
    },
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardText: {
      justifyContent: 'center',
      alignItems: 'center',

      padding: 10,
      paddingBottom: 20,
      paddingTop: 20,
    },
    cardContainer: {
      margin: 30,
    },
    TextInputContainer: {
      paddingTop: 10,
      paddingLeft: 5,
      paddingRight: 5,
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
      // backgroundColor: 'red',
      paddingTop: 40,
      paddingLeft: 20,
    },
    customButtonContainer: {
      marginTop: 5,
      backgroundColor: '#45C5F0',
      padding: 15,
      width: '95%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
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
    },
  });
export default styles;
