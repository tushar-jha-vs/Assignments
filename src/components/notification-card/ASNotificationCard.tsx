import React from 'react'
import { Image, Text, View } from 'react-native'

import { NOTIFICATION_IMAGE_SOURCE, ResizeMode } from '../../constants'
import { COLORS } from '../../theme'
import { IASNotificationCardProps } from '../../types'
import { getTime } from '../../utils'

import { styles } from './asNotificationCard-styles'

const ASNotificationCard = ({ item }: { item: IASNotificationCardProps }) => {
  const { isRead, image, text, createdAt } = item
  const backgroundColor = isRead ? COLORS.primary[50] : COLORS.white
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.subContainer}>
        <Image
          style={styles.image}
          source={NOTIFICATION_IMAGE_SOURCE[image]}
          resizeMode={ResizeMode.Contain}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subText}>{getTime(createdAt)}</Text>
      </View>
    </View>
  )
}

export default ASNotificationCard
