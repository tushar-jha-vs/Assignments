import { StyleSheet, ViewStyle } from 'react-native'

import { SPACING } from '../../theme'

interface Styles {
  container: ViewStyle
  subContainer: ViewStyle
}

export const styles: Styles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
  },
  subContainer: {
    marginHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_24,
  },
})
