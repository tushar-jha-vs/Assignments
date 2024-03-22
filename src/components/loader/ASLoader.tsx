import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import { COLORS } from '../../theme'

import { styles } from './asLoader-styles'

const ASLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.success[100]} />
    </View>
  )
}

export default ASLoader
