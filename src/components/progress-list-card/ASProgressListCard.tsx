import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './asProgressLisrCard-styles'
import { ResizeMode, PROGRESS_CARD_IMAGE_SOURCE } from '../../constants'
import * as Progress from 'react-native-progress'
import { COLORS } from '../../theme/colors'
import { SPACING } from '../../theme'

interface IASProgressListCardProps {
  title: string
  progress: string
}
const ASProgressListCard = (props: IASProgressListCardProps) => {
  const { title, progress } = props
  const progressPercentage = Number(progress) / 100
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.image}
          resizeMode={ResizeMode.Contain}
          source={PROGRESS_CARD_IMAGE_SOURCE[title]}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.progress}>
        <Text style={styles.percentLabel}>{progress}%</Text>
        <Progress.Pie
          size={SPACING.space_16}
          progress={progressPercentage}
          color={COLORS.secondary[400]}
        />
        <Image
          style={styles.icon}
          source={require('../../assets/icons/next.png')}
          resizeMode={ResizeMode.Contain}
        />
      </View>
    </View>
  )
}

export default ASProgressListCard
