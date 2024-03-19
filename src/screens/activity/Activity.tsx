import React, { useState } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

import { ASHeader } from '../../components'
import { COLORS, SPACING } from '../../theme'
import ASOptionsPanel from '../../components/options-panel/ASOptionsPanel'
import Progress from './progress/Progress'
import Assessment from './assessment/Assessment'

import { backGreenIcon } from '../../constants'

const Activity = () => {
  const [activeButton, setActiveButton] = useState<string>('Progress')

  return (
    <View style={styles.container}>
      <ASHeader title="Your Activity" imageSrc={backGreenIcon} />
      <ASOptionsPanel activeButton={activeButton} setActiveButton={setActiveButton} />
      {activeButton === 'Progress' ? <Progress /> : <Assessment />}
    </View>
  )
}

interface IStyles {
  container: ViewStyle
}

const styles: IStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: SPACING.space_1,
  },
})

export default Activity
