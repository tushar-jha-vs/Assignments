import { View, Text, Modal, Image} from 'react-native'
import React from 'react'

import { Bar } from 'react-native-progress'
import { COLORS, SPACING } from '../../theme'

import styles from './asPopUp-styles'

interface IASPopUpProps {
    isModalVisible: boolean;
    setIsModalVisible: (visible: boolean) => void;
    imageURL: any;
    title: string;
    description: string;
    progress: number;
  }

const ASPopUp = (props: IASPopUpProps) => {
const  {isModalVisible, setIsModalVisible, imageURL, title, description, progress} = props

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible)
      }}>
      <View style={styles.container}>
        <Image source={imageURL} style={styles.image} />
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
    </Modal>
  )
}

export default ASPopUp
