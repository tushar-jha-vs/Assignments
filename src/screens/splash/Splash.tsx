import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RootNativeStackParamsList } from '../../types'
import { Logo } from '../../assets'
import { readData } from '../../utils'

import { styles } from './splash-styles'

const Splash = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamsList>>()
  const checkUserVisit = async () => {
    try {
      setTimeout(async () => {
        SplashScreen.hide()
        const check = await readData('IS_ON_BOARDING_DONE')
        if (check === 'true') {
          navigation.navigate('TabNavigator')
        } else {
          navigation.navigate('OnBoarding')
        }
      }, 3000)
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }
  useEffect(() => {
    checkUserVisit()
  }, [])

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.subContainer}>
        <Text style={styles.title}>COVSTATS</Text>
        <Text style={styles.footerText}>© Copyright COVSTATS 2020. All rights reserved</Text>
      </View>
    </View>
  )
}

export default Splash
