import React from 'react'
import { View } from 'react-native'

import ASAssessmentScoreCard from '../assessment-score-card/ASAssessmentScoreCard'
import ASAssessmentTopWreckersList from '../assessment-top-wreckers-list/ASAssessmentTopWreckersList'

import { styles } from './asAssessmentCard-styles'

const ASAssessmentCard = () => {
  return (
    <View style={styles.container}>
      <ASAssessmentScoreCard />
      <ASAssessmentTopWreckersList />
    </View>
  )
}

export default ASAssessmentCard
