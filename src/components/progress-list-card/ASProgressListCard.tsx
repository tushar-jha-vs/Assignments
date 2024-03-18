import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress'

import ASPopUp from '../pop-up/ASPopUp'
import { ResizeMode, PROGRESS_CARD_IMAGE_SOURCE, nextIcon } from '../../constants'
import { COLORS, SPACING } from '../../theme'
import { IProgressProps } from '../../types'

import { styles } from './asProgressListCard-styles'

const ASProgressListCard = (props: IProgressProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { title, progress, description } = props
  const progressPercentage = Number(progress) / 100

  const handlePress = () => {
    setIsModalVisible(true)
  }

  return (
    <TouchableOpacity onPress={handlePress}>
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
          <Image style={styles.icon} source={nextIcon} resizeMode={ResizeMode.Contain} />
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

export default ASProgressListCard