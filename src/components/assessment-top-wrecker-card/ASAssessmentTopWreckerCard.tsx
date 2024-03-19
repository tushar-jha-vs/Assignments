import React, { useState } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { Bar } from 'react-native-progress'

import { ASPopUp } from '..'
import { IProgressProps } from '../../types'
import { COLORS, SPACING } from '../../theme'

import { PROGRESS_CARD_IMAGE_SOURCE, ResizeMode } from '../../constants'

import { styles } from './asAssessmentTopWreckerCard-styles'

const ASAssessmentTopWreckerCard = (props: IProgressProps) => {
  const { title, progress, description } = props
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const handlePress = () => {
    setIsModalVisible(true)
  }
  return (
    <TouchableOpacity onPress={handlePress}>
    <View style={styles.detailSubContainer}>
      <Image
        source={PROGRESS_CARD_IMAGE_SOURCE[title]}
        resizeMode={ResizeMode.Contain}
        style={styles.detailSubContainerImage}
      />
      <View style={styles.detailSubContainerFooter}>
        <View style={styles.detailSubContainerFooterProgress}>
          <Text style={styles.detailSubContainerFooterProgressTitle}>{progress}%</Text>
          <Bar
            progress={Number(progress) / 100}
            borderRadius={SPACING.space_2}
            height={SPACING.space_12}
            width={SPACING.space_52}
            color={COLORS.secondary['500']}
            unfilledColor={COLORS.secondary['300']}
          />
        </View>
        <Text style={styles.detailSubContainerFooterTitle}>{title}</Text>
      </View>
    </View>
    {isModalVisible && (
        <ASPopUp
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          imageURL={PROGRESS_CARD_IMAGE_SOURCE[title]}
          title={title}
          description={description}
          progress={Number(progress)}
        />
      )}
    </TouchableOpacity>
  )
}

export default ASAssessmentTopWreckerCard
