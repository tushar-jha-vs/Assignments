import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, Typography, SPACING } from '../../theme'

interface Styles {
  header: ViewStyle
  image: ImageStyle
  title: TextStyle
  icon: ViewStyle
}

export const styles: Styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    gap: SPACING.space_16,
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_16,
  },
  image: {
    height: SPACING.space_24,
    marginLeft: SPACING.space_16,
    marginRight: SPACING.space_24,
    marginVertical: SPACING.space_16,
    width: SPACING.space_24,
  },
  icon: {
    height: SPACING.space_24,
    marginLeft: SPACING.space_16,
    marginRight: SPACING.space_24,
    marginVertical: SPACING.space_16,
    width: SPACING.space_24,
  },
  title: {
    color: COLORS.neutral[700],
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_18,
    textAlign: 'center',
  },
})
