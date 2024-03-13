import { View, Text, Image } from 'react-native'
import React from 'react'

import { ResizeMode } from '../../constants'

import { styles } from './header-styles'

interface IHeaderProps {
  imgSrc?: number | undefined
  title: string
}

const Header = (props: IHeaderProps) => {
  const { title, imgSrc } = props
  return (
    <View style={styles.header}>
      <View style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      {imgSrc !== undefined ? (
        <Image style={styles.image} resizeMode={ResizeMode.contain} source={imgSrc} />
      ) : (
        <View style={styles.icon} />
      )}
    </View>
  )
}

export default Header
