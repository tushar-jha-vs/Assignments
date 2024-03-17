import React from 'react'
import { Image, Text, View } from 'react-native'
import { Bar } from 'react-native-progress'

import { PROGRESS_CARD_IMAGE_SOURCE, ResizeMode } from '../../constants'

import { COLORS } from '../../theme'

import { styles } from './asAssessmentTopWreckerCard-styles'

interface IASWreckersListCardProps {
  title: string
  progress: string
  description: string
}

const ASAssessmentTopWreckerCard = (props: IASWreckersListCardProps) => {
  const { title, progress } = props
  return (
    <View style={styles.detailSubContainer}>
      <Image
        source={PROGRESS_CARD_IMAGE_SOURCE[title]}
        resizeMode={ResizeMode.Contain}
        style={styles.detailSubContainerImage}
      />
      <View style={styles.detailSubContainerFooter}>
        <View style={styles.detailSubContainerFooterProgress}>
          <Text style={styles.detailSubContainerFooterProgressTitle}>{progress}</Text>
          <Bar
            progress={Number(progress) / 100}
            borderRadius={2}
            height={12}
            width={51}
            color={COLORS.secondary['500']}
            unfilledColor={COLORS.secondary['300']}
          />
        </View>
        <Text style={styles.detailSubContainerFooterTitle}>{title}</Text>
      </View>
    </View>
  )
}

export default ASAssessmentTopWreckerCard
