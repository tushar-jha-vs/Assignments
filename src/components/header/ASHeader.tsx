import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { ResizeMode } from '../../constants'
import { RootTabParamsList } from '../../types'
import { COLORS } from '../../theme'

import { styles } from './asHeader-styles'

interface IASHeaderProps {
  title: string
  imgSrc?: number
  canGoBack?: boolean
  bgColor?: string
  titleColor?: string
}

const ASHeader = (props: IASHeaderProps) => {
  const navigation = useNavigation<StackNavigationProp<RootTabParamsList>>()
  const {
    title,
    canGoBack = false,
    imgSrc,
    bgColor = COLORS.white,
    titleColor = COLORS.neutral[700],
  } = props
  return (
    <View style={[styles.header, { backgroundColor: bgColor }]}>
      {imgSrc ? (
        <TouchableOpacity
          onPress={() => (canGoBack ? navigation.goBack() : navigation.navigate('Dashboard'))}>
          <Image style={styles.image} source={imgSrc} resizeMode={ResizeMode.Contain} />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyIcon} />
      )}
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      <View style={styles.emptyIcon} />
    </View>
  )
}

export default ASHeader
