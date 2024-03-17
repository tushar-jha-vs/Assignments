import { View, Text, Image, Button } from 'react-native'
import React, { useState } from 'react'

import { nextIcon } from '../../constants'

import styles from './asMyReflectionCard-styles'
import ASPopUp from '../pop-up/ASPopUp'

interface IASMyReflectionsCardProps {
  date: string
  title: string
}

const ASMyReflectionCard = (props: IASMyReflectionsCardProps) => {
  const { date, title } = props
  const [modal, setModal] = useState(false)
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
