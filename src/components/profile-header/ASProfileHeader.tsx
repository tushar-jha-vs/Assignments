import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { backIcon, profileBackground } from '../../constants'
import { ProfileInfo } from '..'
import { RootTabParamsList } from '../../types'

import styles from './asProfileHeader-styles'

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
      <ProfileInfo />
    </ImageBackground>
  )
}

export default ASProfileHeader