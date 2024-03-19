import React from 'react'
import { ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native'

import { COLORS, SPACING } from '../../theme'

const ASLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primary[500]} />
    </View>
  )
}

interface IStyles {
  container: ViewStyle
}

const styles: IStyles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default ASLoader
