import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ASDayRefection from '../../components/day-reflection/ASDayReflection'
import { styles } from './activity-styles'
import { COLORS } from '../../theme'

const Activity = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.primary['800']}}>
      <ASDayRefection/>
    </SafeAreaView>
  )
}

export default Activity
