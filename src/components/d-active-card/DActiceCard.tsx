import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './dActiveCard-styles';
import {DActiveListType} from '../../types/notification-type';

const DActiceCard = ({item}: {item: DActiveListType}) => {
  return (
    <ImageBackground style={styles.container} source={item.bgImage}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, {color: item.textColor}]}>
          {item.title}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>2 min</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>4 min</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>8 min</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default DActiceCard;
