import { StyleSheet, ViewStyle } from 'react-native'

import { COLORS, SPACING } from '../../theme'

interface IStyles {
  container: ViewStyle
  mainContainer: ViewStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: SPACING.space_1,
  },
  mainContainer: {
    borderColor: COLORS.neutral['00'],
    borderRadius: SPACING.space_10,
    borderWidth: SPACING.space_1,
    margin: SPACING.space_12,
  },
})
