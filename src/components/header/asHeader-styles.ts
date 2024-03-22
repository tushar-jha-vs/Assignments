import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  title: TextStyle
  icon: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        shadowColor: COLORS.neutral['400'],
        shadowOffset: { width: SPACING.space_0, height: SPACING.space_4 },
        shadowOpacity: SPACING.space_0_5,
        shadowRadius: SPACING.space_4,
      },
      android: {
        shadowColor: COLORS.neutral['400'],
        elevation: SPACING.space_4,
      },
    }),
    padding: SPACING.space_16,
  },
  title: {
    color: COLORS.neutral[500],
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_21,
  },
  icon: {
    color: COLORS.neutral[100],
  },
})
