import React from 'react'
import { Image, Text, View } from 'react-native'

import { NotificationImageSource, ResizeMode } from '../../constants'
import { COLORS } from '../../theme'
import { INotificationCardProps } from '../../types'
import { getTime } from '../../utils'

import { styles } from './notificationCard-styles'

const NotificationCard = ({ item }: { item: INotificationCardProps }) => {
  const backgroundColor = item.isRead ? COLORS.primary[50] : COLORS.white
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.subContainer}>
        <Image
          style={styles.image}
          source={NotificationImageSource[item.image]}
          resizeMode={ResizeMode.contain}
        />
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subText}>{getTime(item.createdAt)}</Text>
      </View>
    </View>
  )
}

export default NotificationCard
