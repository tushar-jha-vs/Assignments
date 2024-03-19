import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootTabParamsList } from '../../types'
import { COLORS } from '../../theme'

import { HeaderTitle, ResizeMode } from '../../constants'

import { styles } from './asHeader-styles'

interface IASHeaderProps {
  title: string
  imageSrc?: number
  canGoBack?: boolean
  bgColor?: string
  titleColor?: string
}

const ASHeader = (props: IASHeaderProps) => {
  const navigation = useNavigation<StackNavigationProp<RootTabParamsList>>()
  const {
    title,
    canGoBack = false,
    imageSrc,
    bgColor = COLORS.white,
    titleColor = COLORS.neutral[700],
  } = props
  return (
    <View style={[styles.header, { backgroundColor: bgColor }]}>
      {imageSrc ? (
        <TouchableOpacity
          onPress={() =>
            canGoBack ? navigation.goBack() : navigation.navigate(HeaderTitle.Dashboard)
          }>
          <Image style={styles.image} source={imageSrc} resizeMode={ResizeMode.Contain} />
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
