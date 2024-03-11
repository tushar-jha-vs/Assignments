// 3rd party libraries
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';

// Absolute imports
import {styles} from './notifications-styles';
import NotificationCard from '../../components/notification-card/NotificationCard';
import Separator from '../../components/notification-card/Separator';
import EmptyNotification from '../../components/notification-none/NotificationNone';
import {NotificationListType} from '../../types/notification-type';

const Notifications = () => {
  const [notificationList, setNotificationListtiveList] = useState<
    NotificationListType[]
  >([]);

  useEffect(() => {
    const fetchNotificationListData = async () => {
      try {
        const response = await fetch(
          'https://tushar-jha-vs.github.io/api/notifications.json',
        );
        const data = await response.json();
        setNotificationListtiveList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotificationListData();
  }, []);
  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.icon}
          source={require('../../assets/images/empty.png')}
        />
        <Text style={styles.title}>Notification</Text>
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={require('../../assets/icons/settings.png')}
        />
      </View>
      <FlatList
        data={notificationList}
        ListEmptyComponent={EmptyNotification}
        renderItem={({item}) => <NotificationCard item={item} />}
        ItemSeparatorComponent={Separator}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default Notifications;
