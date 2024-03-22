import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  title: TextStyle
  footerText: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    flex: SPACING.space_1,
    paddingTop: SPACING.space_172,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_52,
  },
  subContainer: {
    justifyContent: 'space-between',
    flex: SPACING.space_1,
  },
  title: {
    color: COLORS.primary[50],
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_28,
    lineHeight: SPACING.space_32,
    marginTop: SPACING.space_32,
    textAlign: 'center',
  },
  footerText: {
    color: COLORS.neutral[600],
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_16,
    textAlign: 'center',
  },
})
