// Third-party libraries
import React from 'react';
import {Image, Text, View} from 'react-native';

// Absolute imports
import {styles} from './notificationCard-styles';
import {COLORS} from '../../theme/theme';
import {NotificationListType} from '../../types/notification-type';
import {getTimeString} from '../../utils/coomon-util';

const imagePaths: {[key: string]: number} = {
  reflection: require('../../assets/icons/reflection.png'),
  reminder: require('../../assets/icons/reminder.png'),
  'D-active': require('../../assets/icons/D-active.png'),
};

const NotificationCard = ({item}: {item: NotificationListType}) => {
  const backgroundColor = item.status ? COLORS.primary50 : 'white';
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.subContainer}>
        <Image
          style={styles.icon}
          source={imagePaths[item.image]}
          resizeMode="contain"
        />
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subText}>
          {getTimeString(item.createdAt)}
          {' ago'}
        </Text>
      </View>
    </View>
  );
};

export default NotificationCard;
