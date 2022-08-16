import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import getStyles from './style';
function Card({Title = 'Title Not Available'}) {
  const styles = getStyles();
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.title}>{Title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default Card;
