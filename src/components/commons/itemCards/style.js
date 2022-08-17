import {StyleSheet} from 'react-native';
const getStyles = () =>
  StyleSheet.create({
    title: {
      color: 'black',
      fontSize: 15,
      fontWeight: '500',
      padding: 10,
    },
    container: {
      margin: 10,
      width: 190,
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      backgroundColor: '#ffffff',
      elevation: 10,
    },
  });
export default getStyles;
