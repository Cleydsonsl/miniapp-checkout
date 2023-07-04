import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

const Badge = ({ text, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

export default Badge;