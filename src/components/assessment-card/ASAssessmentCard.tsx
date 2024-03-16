import React from 'react'
import { View } from 'react-native'

import ASAssessmentScoreCard from '../assessment-score-card/ASAssessmentScoreCard'
import ASAssessmentTopWreckersCard from '../assessment-top-wreckers-card/ASAssessmentTopWreckersCard'

import { styles } from './asAssessmentCard-styles'

const ASAssessmentCard = () => {
  return (
    <View style={styles.container}>
      <ASAssessmentScoreCard />
      <ASAssessmentTopWreckersCard />
    </View>
  )
}

export default ASAssessmentCard
