import { View, Text, Modal, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { Bar } from 'react-native-progress'

import { COLORS, SPACING } from '../../theme'
import { ResizeMode } from '../../constants'

import styles from './asPopUp-styles'

interface IASPopUpProps {
  isModalVisible: boolean
  setIsModalVisible: Dispatch<SetStateAction<boolean>>
  imageURL: ImageSourcePropType
  title: string
  description: string
  progress: number
}

const ASPopUp = (props: IASPopUpProps) => {
  const { isModalVisible, setIsModalVisible, imageURL, title, description, progress } = props

  const handlePress = () => {
    setIsModalVisible(!isModalVisible)
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible)
      }}>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <View style={styles.modalOverlay}>
          <View style={styles.subContainer}>
            <Image source={imageURL} resizeMode={ResizeMode.Contain} style={styles.image} />
            <View>
              <View style={styles.textContainer}>
                <Text style={styles.title}> {title} </Text>
                <Text style={styles.description}> {description} </Text>
              </View>
              <View style={styles.progressContainer}>
                <Text style={styles.progressTitle}> {progress}% </Text>
                <Bar
                  progress={Number(progress) / 100}
                  borderRadius={SPACING.space_2}
                  height={SPACING.space_12}
                  width={SPACING.space_52}
                  color={COLORS.secondary['500']}
                  unfilledColor={COLORS.secondary['300']}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

export default ASPopUp
