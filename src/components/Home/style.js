import {StyleSheet} from 'react-native';
const styles = colors =>
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

      //   backgroundColor: '#3873A6',
      padding: 10,
      paddingBottom: 20,
      paddingTop: 20,
    },
    cardContainer: {
      //   backgroundColor: 'red',
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
    customButtonContainer: {
      marginTop: 15,
      backgroundColor: '#000000',
      padding: 15,
      width: '70%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    customButtonTitle: {
      color: 'white',
      fontWeight: '700',
      textTransform: 'uppercase',
    },
  });
export default styles;
