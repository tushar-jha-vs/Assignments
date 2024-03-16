import { View, Text, Image } from 'react-native'
import React from 'react'

import { nextIcon } from '../../constants/profile-constants'

import styles from './asMyReflectionCard-styles'

interface IASMyReflectionsCardProps {
  date: string
  title: string
}

const ASMyReflectionCard = (props: IASMyReflectionsCardProps) => {
  const { date, title } = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {date} </Text>
      <View style={styles.subContainer}>
        <Text style={styles.subTitle}> {title} </Text>
        <Image source={nextIcon} style={styles.icon} />
      </View>
    </View>
  )
}

export default ASMyReflectionCard
