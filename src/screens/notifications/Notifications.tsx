// 3rd party libraries
import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';

// Absolute imports
import {styles} from './notifications-styles';
import NotificationCard from '../../components/notification-card/NotificationCard';
import Separator from '../../components/notification-card/Separator';
import EmptyNotification from '../../components/notification-none/NotificationNone';
import {NotificationListType} from '../../types/notification-type';

const NotificationList: NotificationListType[] = [
  {
    id: 1,
    image: require('../../assets/icons/reflection.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4m ago',
    status: 'UNREAD',
  },
  {
    id: 2,
    image: require('../../assets/icons/reflection.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4m ago',
    status: 'UNREAD',
  },
  {
    id: 3,
    image: require('../../assets/icons/D-active.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '1hr ago',
    status: 'READ',
  },
  {
    id: 4,
    image: require('../../assets/icons/D-active.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '3hr ago',
    status: 'READ',
  },
  {
    id: 5,
    image: require('../../assets/icons/reflection.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: 'yesterday',
    status: 'UNREAD',
  },
  {
    id: 6,
    image: require('../../assets/icons/reflection.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '3days ago',
    status: 'UNREAD',
  },
  {
    id: 7,
    image: require('../../assets/icons/reminder.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '1week ago',
    status: 'READ',
  },
  {
    id: 8,
    image: require('../../assets/icons/reminder.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '2week ago',
    status: 'READ',
  },
  {
    id: 9,
    image: require('../../assets/icons/reminder.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '1month ago',
    status: 'READ',
  },
  {
    id: 10,
    image: require('../../assets/icons/reflection.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '6month ago',
    status: 'UNREAD',
  },
  {
    id: 11,
    image: require('../../assets/icons/D-active.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '15m ago',
    status: 'READ',
  },
  {
    id: 12,
    image: require('../../assets/icons/D-active.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '3week ago',
    status: 'READ',
  },
];

const Notifications = () => {
  return (
    <>
      <View style={styles.header}>
        <Image style={styles.icon} />
        <Text style={styles.title}>Notification</Text>
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={require('../../assets/icons/settings.png')}
        />
      </View>
      <FlatList
        data={NotificationList}
        ListEmptyComponent={EmptyNotification}
        renderItem={({item}) => <NotificationCard item={item} />}
        ItemSeparatorComponent={Separator}
        keyExtractor={item => String(item.id)}
      />
    </>
  );
};

export default Notifications;
