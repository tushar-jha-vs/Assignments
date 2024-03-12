import React from 'react';
import {Image, Text, View} from 'react-native';

import {NotificationImageSource} from '../../constants';
import {COLORS} from '../../theme';
import {NotificationListType} from '../../types';

import {getTimeString} from '../../utils/common-utils';

import {styles} from './notificationCard-styles';

const NotificationCard = ({item}: {item: NotificationListType}) => {
  const backgroundColor = item.isRead ? COLORS.primary50 : COLORS.white;
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.subContainer}>
        <Image
          style={styles.icon}
          source={NotificationImageSource[item.image]}
          resizeMode="contain"
        />
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subText}>{getTimeString(item.createdAt)}</Text>
      </View>
    </View>
  );
};

export default NotificationCard;
