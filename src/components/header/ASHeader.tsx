import { View, Text, Image } from 'react-native'
import React from 'react'

import { ResizeMode } from '../../constants'

import { styles } from './asHeader-styles'

interface IASHeaderProps {
  imgSrc?: number | undefined
  title: string
}

const ASHeader = (props: IASHeaderProps) => {
  const { title, imgSrc } = props
  return (
    <View style={styles.header}>
      <View style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      {imgSrc !== undefined ? (
        <Image style={styles.image} resizeMode={ResizeMode.Contain} source={imgSrc} />
      ) : (
        <View style={styles.icon} />
      )}
    </View>
  )
}

export default ASHeader
