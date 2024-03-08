// Third-party libraries
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

// Absolute imports
import Notification from './src/screens/notifications/Notifications';
import NotificationCard from './src/components/notification-card/NotificationCard';
import Separator from './src/components/notification-card/Separator';
import EmptyNotification from './src/components/notification-none/NotificationNone';

// Constants
import {NotificationListType} from './src/types/notification-type';

const NotificationList: NotificationListType[] = [
  {
    id: 1,
    image: require('./src/assets/icons/reflection.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4m ago',
    status: 'UNREAD',
  },
  {
    id: 2,
    image: require('./src/assets/icons/reflection.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4m ago',
    status: 'UNREAD',
  },
  {
    id: 3,
    image: require('./src/assets/icons/D-active.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4m ago',
    status: 'READ',
  },
  {
    id: 4,
    image: require('./src/assets/icons/D-active.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4m ago',
    status: 'READ',
  },
  {
    id: 5,
    image: require('./src/assets/icons/reflection.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4m ago',
    status: 'UNREAD',
  },
  {
    id: 6,
    image: require('./src/assets/icons/reflection.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4m ago',
    status: 'UNREAD',
  },
  {
    id: 7,
    image: require('./src/assets/icons/reminder.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4m ago',
    status: 'READ',
  },
  {
    id: 8,
    image: require('./src/assets/icons/reminder.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4m ago',
    status: 'READ',
  },
  {
    id: 9,
    image: require('./src/assets/icons/reminder.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4m ago',
    status: 'READ',
  },
  {
    id: 10,
    image: require('./src/assets/icons/reflection.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4m ago',
    status: 'UNREAD',
  },
  {
    id: 11,
    image: require('./src/assets/icons/D-active.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4m ago',
    status: 'READ',
  },
  {
    id: 12,
    image: require('./src/assets/icons/D-active.png'),
    text: 'Reminder of the day Unlocked Complete exercises for bonus points!',
    time: '4m ago',
    status: 'READ',
  },
];
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Notification />
      <FlatList
        data={NotificationList}
        ListEmptyComponent={EmptyNotification}
        renderItem={({item}) => <NotificationCard item={item} />}
        ItemSeparatorComponent={Separator}
        keyExtractor={item => String(item.id)}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
