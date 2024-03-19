import React, { useState } from 'react'
import { View } from 'react-native'

import { ASAssessmentScoreCard, ASAssessmentTopWreckersList } from '../../../components'

import { styles } from './assessment-styles'

const Assessment = () => {
  const [averageValue, setAverageValue] = useState<number>(0)
  return (
    <View style={styles.container}>
      <ASAssessmentScoreCard averageValue={averageValue} />
      <ASAssessmentTopWreckersList setAverageValue={setAverageValue} />
    </View>
  )
}

export default Assessment
