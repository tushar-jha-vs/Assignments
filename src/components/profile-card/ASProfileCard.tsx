import { View, Text, Image } from 'react-native'
import React from 'react'

import { nextIcon } from '../../constants/profile-constants'

import styles from './asProfileCard-styles'

interface IASProfileCardProps {
  title: string
}

const ASProfileCard = (props: IASProfileCardProps) => {
  const { title } = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.icon} source={nextIcon} />
    </View>
  )
}

export default ASProfileCard
