// Third-party libraries
import React from 'react';
import { Image, Text, View } from 'react-native';

// Absolute imports
import { styles } from './notificationCard-styles';
import { COLORS } from '../../theme/theme';
import { NotificationListType } from '../../types/notification-type';


const NotificationCard = ({item}: {item: NotificationListType}) => {
  const backgroundColor = item.status === 'READ' ? 'white' : COLORS.primary50;
  return (
    <View style={[styles.container,{backgroundColor}]}>
      <View style={styles.subContainer}>
        <Image style={styles.icon} source={item?.image} resizeMode="contain" />
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subText}>{item.time}</Text>
      </View>
    </View>
  );
};

export default NotificationCard;
