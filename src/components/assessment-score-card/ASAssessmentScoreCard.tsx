import React from 'react'
import { Image, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { COLORS } from '../../theme'

import { ASSESSMENT_IMAGE_TITLE, ASSESSMENT_SCREEN_IMAGE, ResizeMode } from '../../constants'

import { styles } from './asAssessmentScoreCard-styles'

interface IScoreProps {
  averageValue: number
}

const ASAssessmentScoreCard = ({ averageValue }: IScoreProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerImageContainer}>
          <Image
            resizeMode={ResizeMode.Contain}
            source={ASSESSMENT_SCREEN_IMAGE.Surviving}
            style={styles.headerImageContainerImage}
          />
          <Text style={styles.headerImageContainerTitle}>{ASSESSMENT_IMAGE_TITLE.Surviving}</Text>
        </View>
        <View style={styles.headerProgressContainer}>
          <Text style={styles.headerProgressContainerTitle}>{averageValue}/100</Text>

          <View style={styles.progressBarOuterContainer}>
            <View style={{ width: `${averageValue}%` }}>
              <LinearGradient
                colors={COLORS.progressBarGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.progressBarInnerContainer}
              />
            </View>
          </View>
        </View>
        <View style={styles.headerImageContainer}>
          <Image
            resizeMode={ResizeMode.Contain}
            source={ASSESSMENT_SCREEN_IMAGE.Thriving}
            style={[styles.headerImageContainerImage, styles.headerImageContainerImageTwo]}
          />
          <Text style={styles.headerImageContainerTitle}>{ASSESSMENT_IMAGE_TITLE.Thriving}</Text>
        </View>
      </View>
      <Text style={styles.containerTitle}>
        Mental Well-being Score is Moderate.{'\n'}Keep it Up!
      </Text>
    </View>
  )
}

export default ASAssessmentScoreCard
