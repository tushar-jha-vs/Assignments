import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { nextIcon } from '../../constants'

import styles from './asMyReflectionCard-styles'
import { RootStackParamList } from '../../types'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/core'

interface IASMyReflectionsCardProps {
  date: string
  title: string
}

const ASMyReflectionCard = (props: IASMyReflectionsCardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const { date, title } = props
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Daily Reflection')}>
      <View style={styles.container}>
        <Text style={styles.title}> {date} </Text>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}> {title} </Text>
          <Image source={nextIcon} style={styles.icon} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ASMyReflectionCard
