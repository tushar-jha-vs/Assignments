import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import { IASNotificationCardProps } from '../../types'
import { NOTIFICATIONS_BASE_URL, settingsIcon } from '../../constants'
import { NoData, NotificationCard, Header } from '../../components'
import { getNotificationDActiveData } from '../../services'

import { styles } from './notifications-styles'

const Notifications = () => {
  const [notificationList, setNotificationList] = useState<IASNotificationCardProps[]>([])

  const getNotificationsListData = async () => {
    const res = await getNotificationDActiveData(NOTIFICATIONS_BASE_URL)
    if (res.success) {
      setNotificationList(res.data)
    } else {
      console.error(res.error)
    }
  }
  useEffect(() => {
    getNotificationsListData()
  }, [])
  return (
    <>
      <Header title="Notification" imgSrc={settingsIcon} />
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.subContainer}
          data={notificationList}
          ListEmptyComponent={NoData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <NotificationCard item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  )
}

export default Notifications
