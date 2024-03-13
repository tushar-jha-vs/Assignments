import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface Styles {
  customButton: ViewStyle
  buttonText: TextStyle
}

export const styles: Styles = StyleSheet.create({
  customButton: {
    backgroundColor: COLORS.white,
    borderRadius: SPACING.space_8,
    elevation: SPACING.space_8,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_12,
    shadowColor: COLORS.tundora,
  },
  buttonText: {
    color: COLORS.neutral[600],
    fontFamily: Typography.primary.semiBold,
    fontSize: SPACING.space_16,
  },
})
