import {StyleSheet} from 'react-native';
const getStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
    detailContainer: {
      backgroundColor: '#E68653',
      padding: 10,
      paddingTop: 20,
      paddingBottom: 20,
    },
    title: {
      color: 'black',
    },
    mainHeading: {
      fontSize: 20,
      fontWeight: '800',
      padding: 10,
      borderWidth: 1,
      borderColor: 'thistle',
      borderRadius: 10,
    },
    subHeading: {
      fontSize: 18,
      fontWeight: '500',
    },
    header: {color: 'black', fontWeight: '600', fontSize: 17},
    listTitle: {color: 'black', fontWeight: '400', fontSize: 15},
  });
export default getStyles;
