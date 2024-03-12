import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';

import {NotificationListType} from '../../types';
import {NOTIFICATIONS_BASE_URL, settingsIcon} from '../../constants';

import NotificationCard from '../../components/notification-card/NotificationCard';
import Separator from '../../components/notification-card/Separator';
import NoData from '../../components/no-data/NoData';

import {styles} from './notifications-styles';

const Notifications = () => {
  const [notificationList, setNotificationList] = useState<
    NotificationListType[]
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(NOTIFICATIONS_BASE_URL);
        const data = await response.json();
        setNotificationList(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <>
      <View style={styles.header}>
        <View style={styles.icon} />
        <Text style={styles.title}>Notification</Text>
        <Image style={styles.icon} resizeMode="contain" source={settingsIcon} />
      </View>
      <FlatList
        data={notificationList}
        ListEmptyComponent={NoData}
        renderItem={({item}) => <NotificationCard item={item} />}
        ItemSeparatorComponent={Separator}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default Notifications;
