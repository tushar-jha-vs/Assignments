import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootTabParamsList } from '../../types'

import { backIcon, profileBackground } from '../../constants'

import styles from './asProfileHeader-styles'
import { ASProfileInfo } from '..'

const ASProfileHeader = () => {
  const navigation = useNavigation<StackNavigationProp<RootTabParamsList>>()
  return (
    <ImageBackground source={profileBackground}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Image source={backIcon} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.icon} />
      </View>
      <ASProfileInfo/>
    </ImageBackground>
  )
}

export default ASProfileHeader