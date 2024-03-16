import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { ASHeader } from '../../components'
import { COLORS } from '../../theme'

import ASOptionsPanel from '../../components/options-panel/ASOptionsPanel'
import Progress from './progress/Progress'
import Assessment from './assessment/Assessment'

const Activity = () => {
  const [activeButton, setActiveButton] = useState<string>('Progress')

  return (
    <View style={styles.container}>
      <ASHeader title="Your Activity" />
      <ASOptionsPanel activeButton={activeButton} setActiveButton={setActiveButton} />
      {activeButton === 'Progress' ? <Progress /> : <Assessment />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
})

export default Activity
