import React from 'react'
import { Image, Text, View } from 'react-native'
import {Bar} from 'react-native-progress';


import { ResizeMode } from '../../constants'

import {styles} from './asAssessmentScoreCard-styles'
import { COLORS, SPACING } from '../../theme';

const SURVIVING = require('../../assets/icons/surviving.png')
const THRIVING = require('../../assets/icons/thriving.png')

const ASAssessmentScoreCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerImageContainer}>
          <Image source={SURVIVING} resizeMode={ResizeMode.Contain} style={styles.headerImageContainerImage}/>
          <Text style={styles.headerImageContainertitle}>Surviving</Text>
        </View>
        <View style={styles.headerProgressContainer}>
          <Text style={styles.headerProgressContainertitle}>50/100</Text>
          <Bar progress={0.5} height={12} borderWidth={1} borderRadius={100} unfilledColor={COLORS.white}/>
        </View>
        <View style={styles.headerImageContainer}>
          <Image source={THRIVING} resizeMode={ResizeMode.Contain} style={[styles.headerImageContainerImage,{width:SPACING.space_50}]}/>
          <Text style={styles.headerImageContainertitle}>Thriving</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomContainerTitle}>Mental Well-being Score is Moderate.{'\n'}Keep it Up!</Text>
      </View>
    </View>
  )
}

export default ASAssessmentScoreCard
