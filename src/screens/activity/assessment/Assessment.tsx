import { View, Text } from 'react-native'
import React from 'react'
// import ASAssessmentCard from '../../../components/assessment-card/ASAssessmentCard'
import ASCardStack from '../../../components/card-stack/ASCardStack'
const Assessment = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <ASAssessmentCard/> */}
      <ASCardStack />
    </View>
  )
}

export default Assessment
