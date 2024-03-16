import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface Styles {
  container: ViewStyle
  button: ViewStyle
  label: TextStyle
}

export const styles: Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.neutral['50'],
    borderRadius: SPACING.space_8,
    marginTop: SPACING.space_8,
    marginBottom: SPACING.space_32,
    marginHorizontal: SPACING.space_20,
  },
  button: {
    flex: SPACING.space_1,
    paddingVertical: SPACING.space_12,
    paddingHorizontal: SPACING.space_16,
    borderRadius: SPACING.space_8,
  },
  label: {
    textAlign: 'center',
    fontFamily: Typography.primary.bold,
    lineHeight: SPACING.space_18,
    fontSize: SPACING.space_12,
  },
})
