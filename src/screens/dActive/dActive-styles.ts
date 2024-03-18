import { StyleSheet, ViewStyle } from 'react-native'

import { COLORS, SPACING } from '../../theme'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    backgroundColor: COLORS.white,
    marginBottom: SPACING.space_88,
  },
  subContainer: {
    marginHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_24,
  },
})
