import {StyleSheet} from 'react-native';
const getStyles = () =>
  StyleSheet.create({
    title: {
      color: 'white',
      fontWeight: '700',
      fontSize: 15,
    },
    description: {
      color: 'white',
    },
    container: {
      marginTop: 15,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      overflow: 'hidden',
      // elevation: 10,
    },
    header: {
      padding: 20,
      backgroundColor: '#E68653',
    },
    details: {
      padding: 20,
      backgroundColor: 'grey',
    },
  });
export default getStyles;
