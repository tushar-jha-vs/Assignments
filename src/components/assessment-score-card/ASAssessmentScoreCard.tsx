import React from 'react'
import { Image, Text, View } from 'react-native'
import { Bar } from 'react-native-progress'

import { COLORS, SPACING } from '../../theme'
import { ASSESSMENT_IMAGE_TITLE, ASSESSMENT_SCREEN_IMAGE, ResizeMode } from '../../constants'

import { styles } from './asAssessmentScoreCard-styles'

const ASAssessmentScoreCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerImageContainer}>
          <Image
            resizeMode={ResizeMode.Contain}
            source={ASSESSMENT_SCREEN_IMAGE[ASSESSMENT_IMAGE_TITLE.Surviving]}
            style={styles.headerImageContainerImage}
          />
          <Text style={styles.headerImageContainerTitle}>{ASSESSMENT_IMAGE_TITLE.Surviving}</Text>
        </View>
        <View style={styles.headerProgressContainer}>
          <Text style={styles.headerProgressContainerTitle}>50/100</Text>
          <Bar
            borderRadius={SPACING.space_100}
            borderWidth={SPACING.space_1}
            color={COLORS.secondary['500']}
            height={SPACING.space_12}
            progress={0.5}
            unfilledColor={COLORS.white}
          />
        </View>
        <View style={styles.headerImageContainer}>
          <Image
            resizeMode={ResizeMode.Contain}
            source={ASSESSMENT_SCREEN_IMAGE[ASSESSMENT_IMAGE_TITLE.Thriving]}
            style={[styles.headerImageContainerImage, { width: SPACING.space_50 }]}
          />
          <Text style={styles.headerImageContainerTitle}>{ASSESSMENT_IMAGE_TITLE.Thriving}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomContainerTitle}>
          Mental Well-being Score is Moderate.{'\n'}Keep it Up!
        </Text>
      </View>
    </View>
  )
}

export default ASAssessmentScoreCard
