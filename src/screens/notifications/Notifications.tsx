import React, { useEffect } from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import { useSelector } from 'react-redux'

import { HeaderTitle, backGreenIcon } from '../../constants'
import { ASNoData, ASNotificationCard, ASHeader } from '../../components'

import { RootState, useAppDispatch } from '../../redux/store'
import { fetchNotificationsListData } from '../../redux/features/notifications-slice'

import { styles } from './notifications-styles'

const Notifications = () => {
  const notificationsList = useSelector((state: RootState) => state.notification.notificationsList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchNotificationsListData())
  }, [])

  return (
    <>
      <ASHeader title={HeaderTitle.Notifications} imgSrc={backGreenIcon} />
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.subContainer}
          data={notificationsList}
          ListEmptyComponent={ASNoData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ASNotificationCard {...item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </>
  )
}

export default Notifications
