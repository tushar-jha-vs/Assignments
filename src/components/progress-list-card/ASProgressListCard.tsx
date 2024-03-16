import React from 'react'
import { View, Text, Image } from 'react-native'
import * as Progress from 'react-native-progress'

import { ResizeMode, PROGRESS_CARD_IMAGE_SOURCE, nextIcon } from '../../constants'
import { COLORS,SPACING } from '../../theme'

import { styles } from './asProgressListCard-styles'

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
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode={ResizeMode.Contain}
            source={PROGRESS_CARD_IMAGE_SOURCE[title]}
          />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.progress}>
        <Text style={styles.percentLabel}>{progress}%</Text>
        <Progress.Pie
          style={styles.pieChart}
          size={SPACING.space_16}
          progress={progressPercentage}
          color={COLORS.secondary[400]}
        />
        <Image
          style={styles.icon}
          source={nextIcon}
          resizeMode={ResizeMode.Contain}
        />
      </View>
    </View>
  )
}

export default ASProgressListCard
