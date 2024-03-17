import React from 'react'
import { View } from 'react-native'

import ASAssessmentCard from '../../../components/assessment-card/ASAssessmentCard'

import { styles } from './assessment-styles'

const Assessment = () => {
  return (
    <View style={styles.container}>
      <ASAssessmentCard />
    </View>
  )
}

export default Assessment
