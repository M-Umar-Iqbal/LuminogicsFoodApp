import {StyleSheet} from 'react-native';
const getStyles = () =>
  StyleSheet.create({
    title: {
      color: 'black',
    },
    container: {
      backgroundColor: '#E68653',
      paddingTop: 20,
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      flexWrap: 'wrap',
      // backgroundColor: 'grey',
    },
  });
export default getStyles;
