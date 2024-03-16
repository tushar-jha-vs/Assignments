import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import { IASNotificationCardProps } from '../../types'
import { HeaderTitle, NOTIFICATIONS_BASE_URL, backGreenIcon } from '../../constants'
import { ASNoData, ASNotificationCard, ASHeader } from '../../components'
import { getListDataFromURL } from '../../services'

import { styles } from './notifications-styles'

const Notifications = () => {
  const [notificationList, setNotificationList] = useState<IASNotificationCardProps[]>([])

  const getNotificationsListData = async () => {
    const res = await getListDataFromURL(NOTIFICATIONS_BASE_URL)
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
      <ASHeader title={HeaderTitle.Notifications} imgSrc={backGreenIcon} />
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.subContainer}
          data={notificationList}
          ListEmptyComponent={ASNoData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ASNotificationCard {...item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  )
}

export default Notifications
