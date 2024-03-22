import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  label: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.space_10,
    paddingVertical: SPACING.space_16,
    borderWidth: SPACING.space_1,
    borderColor: COLORS.neutral['00'],
    borderRadius: SPACING.space_10,
    marginHorizontal: SPACING.space_20,
    marginBottom: '18%',
  },
  label: {
    fontFamily: Typography.secondary.semiBold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_22,
    color: COLORS.neutral[400],
    marginBottom: SPACING.space_8,
    textAlign: 'left',
  },
})
