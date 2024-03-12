import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './customButton-styles';

const CustomButton = ({item}: {item: string}) => {
  return (
    <TouchableOpacity style={styles.customButton}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
