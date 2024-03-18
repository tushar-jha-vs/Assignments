import { View } from 'react-native'
import React from 'react'

import { ASAssessmentScoreCard, ASAssessmentTopWreckersList } from '../../../components'

import { styles } from './assessment-styles'

const Assessment = () => {
  return (
    <View style={styles.container}>
      <ASAssessmentScoreCard />
      <ASAssessmentTopWreckersList />
    </View>
  )
}

export default Assessment
