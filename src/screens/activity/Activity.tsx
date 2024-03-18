import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import { ASHeader } from '../../components'
import { COLORS, SPACING } from '../../theme'
import { backGreenIcon } from '../../constants'

import ASOptionsPanel from '../../components/options-panel/ASOptionsPanel'
import Progress from './progress/Progress'
import Assessment from './assessment/Assessment'

const Activity = () => {
  const [activeButton, setActiveButton] = useState<string>('Progress')

  return (
    <SafeAreaView style={styles.container}>
      <ASHeader title="Your Activity" imgSrc={backGreenIcon} />
      <ASOptionsPanel activeButton={activeButton} setActiveButton={setActiveButton} />
      {activeButton === 'Progress' ? <Progress /> : <Assessment />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: SPACING.space_1,
  },
})

export default Activity
