import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  label: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SPACING.space_8,
    elevation: SPACING.space_8,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_12,
    shadowColor: COLORS.tundora,
  },
  label: {
    color: COLORS.neutral[600],
    fontFamily: Typography.primary.semiBold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_18,
  },
})
