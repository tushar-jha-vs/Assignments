import { View, Text, Modal, Image, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React from 'react'

import { Bar } from 'react-native-progress'
import { COLORS, SPACING } from '../../theme'

import styles from './asPopUp-styles'
import { ResizeMode } from '../../constants'

interface IASPopUpProps {
  isModalVisible: boolean
  setIsModalVisible: (visible: boolean) => void
  imageURL: any
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
      <TouchableOpacity style={{ flex: SPACING.space_1 }} onPress={handlePress}>
        <View style={styles.modalOverlay}>
          <View style={styles.container}>
            <Image source={imageURL} resizeMode={ResizeMode.Contain} style={styles.image} />
            <View style={styles.subContainer}>
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
