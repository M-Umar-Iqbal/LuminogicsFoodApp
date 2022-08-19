import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/constants';

const getStyles = () =>
  StyleSheet.create({
    listTitle: {color: colors.black, fontWeight: '500', fontSize: 17},
    header: {color: colors.black, fontWeight: '600', fontSize: 17},
  });

export default getStyles;
