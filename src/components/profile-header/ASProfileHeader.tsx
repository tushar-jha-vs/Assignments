import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'

import { backIcon, profileBackground } from '../../constants'
import { ProfileInfo } from '..'

import styles from './asProfileHeader-styles'

const ASProfileHeader = () => {
  return (
    <ImageBackground source={profileBackground}>
      <View style={styles.header}>
        <Image source={backIcon} style={styles.image} />
        <Text style={styles.title}>Profile</Text>
        <View style={styles.icon} />
      </View>

      <ProfileInfo />
    </ImageBackground>
  )
}

export default ASProfileHeader
