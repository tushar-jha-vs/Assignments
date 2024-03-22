import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { SPACING } from '../../theme'
import { RootNativeStackParamsList } from '../../types'

import { styles } from './asHeader-styles'
import ASLogoutModal from '../logout-modal/ASLogoutModal'

interface IASHeaderProps {
  title: string
}

const ASHeader = (props: IASHeaderProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamsList>>()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { title } = props
  const handleLogout = () => {
    navigation.navigate('Login')
    setIsModalVisible(false)
  }
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="menu" size={SPACING.space_28} />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <Icon style={styles.icon} name="user-check" size={SPACING.space_28} />
      </TouchableOpacity>
      <ASLogoutModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={handleLogout}
      />
    </View>
  )
}

export default ASHeader
