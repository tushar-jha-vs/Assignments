import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { BreathingDifficulty, Cough, Fever } from '../../assets'
import { COLORS, SPACING } from '../../theme'
import { RootNativeStackParamsList } from '../../types'
import { storeData } from '../../utils'

import { onBoardingScreens } from '../../constants'

import { styles } from './onBoarding-styles'

const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamsList>>()
  const renderImage = (title: string) => {
    let image
    switch (title) {
      case 'Fever':
        image = <Fever width={SPACING.space_150} height={SPACING.space_235} />
        break
      case 'Cough':
        image = <Cough width={SPACING.space_150} height={SPACING.space_235} />
        break
      case 'Breathing Difficulty':
        image = <BreathingDifficulty width={SPACING.space_150} height={SPACING.space_235} />
        break
    }
    return image
  }

  const handleNext = () => {
    if (currentIndex === 2) {
      storeData('IS_ON_BOARDING_DONE', 'true')
      navigation.navigate('Login')
      return
    }
    setCurrentIndex(prev => prev + 1)
  }
  const handleSkip = () => {
    storeData('IS_ON_BOARDING_DONE', 'true')
    navigation.navigate('Login')
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.imageContainer}>
            {renderImage(onBoardingScreens[currentIndex].title)}
          </View>
          <Text style={styles.title}>{onBoardingScreens[currentIndex].title}</Text>
          <Text style={styles.description}>{onBoardingScreens[currentIndex].description}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.navigateLabel}>Skip</Text>
          </TouchableOpacity>
          <View style={styles.currentScreenContainer}>
            <View
              style={[
                styles.activeScreen,
                { backgroundColor: currentIndex === 0 ? COLORS.primary[50] : COLORS.neutral['00'] },
              ]}
            />
            <View
              style={[
                styles.activeScreen,
                { backgroundColor: currentIndex === 1 ? COLORS.primary[50] : COLORS.neutral['00'] },
              ]}
            />
            <View
              style={[
                styles.activeScreen,
                { backgroundColor: currentIndex === 2 ? COLORS.primary[50] : COLORS.neutral['00'] },
              ]}
            />
          </View>
          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.navigateLabel}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default OnBoarding
