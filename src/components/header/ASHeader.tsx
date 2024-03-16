import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { ResizeMode } from '../../constants'
import { RootTabParamsList } from '../../types'

import { styles } from './asHeader-styles'

interface IASHeaderProps {
  title: string
  imgSrc?: number
  canGoBack?: boolean
}

const ASHeader = (props: IASHeaderProps) => {
  const navigation = useNavigation<StackNavigationProp<RootTabParamsList>>()
  const { title, canGoBack = false, imgSrc } = props
  return (
    <View style={styles.header}>
      {imgSrc ? (
        <TouchableOpacity
          onPress={() => (canGoBack ? navigation.goBack() : navigation.navigate('Dashboard'))}>
          <Image style={styles.image} source={imgSrc} resizeMode={ResizeMode.Contain} />
        </TouchableOpacity>
      ) : (
        <View style={styles.icon} />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icon} />
    </View>
  )
}

export default ASHeader
