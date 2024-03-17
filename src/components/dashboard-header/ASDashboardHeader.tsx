import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

import { DASHBOARD_HEADER_IMAGE_SOURCE, ResizeMode } from '../../constants'
import { getCurrentDate } from '../../utils'

import { styles } from './asDashboardHeader-styles'

const ASDashboardHeader = () => {
  return (
    <ImageBackground
      resizeMode={ResizeMode.Cover}
      source={DASHBOARD_HEADER_IMAGE_SOURCE['header']}
      style={styles.imageBackground}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image
            source={DASHBOARD_HEADER_IMAGE_SOURCE['calendar']}
            style={styles.subContainerImage}
          />
          <Text style={styles.subContainerDate}>{getCurrentDate()}</Text>
        </View>
        <View style={styles.bottomSubContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textContainerTitle}>Overthinker</Text>
            <Text style={styles.textContainerDay}>Day 1 of 24</Text>
          </View>
          <Image
            source={DASHBOARD_HEADER_IMAGE_SOURCE['overthinker']}
            style={styles.image}
            resizeMode={ResizeMode.Contain}
          />
        </View>
      </View>
    </ImageBackground>
  )
}

export default ASDashboardHeader
