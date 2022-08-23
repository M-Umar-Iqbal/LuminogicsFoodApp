import {StyleSheet} from 'react-native';
const getStyles = color =>
  StyleSheet.create({
    inputFieldContainer: {
      flexDirection: 'row',
      flex: 1,
      borderRadius: 12,
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      borderColor: color,
      borderWidth: 2,
      height: 60,
    },
  });

export default getStyles;
