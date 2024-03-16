import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../../theme'

interface Styles {
  mainContainer: ViewStyle,
  imageContainer: ViewStyle,
  image: ViewStyle,
  reflectionButton: ViewStyle,
  label: TextStyle
}

export const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    marginBottom: SPACING.space_172,
    gap: SPACING.space_32,
    flex: 1,
  },
  imageContainer: {
    height: SPACING.space_154,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  reflectionsButton: {
    backgroundColor: COLORS.white,
    borderRadius: SPACING.space_8,
    bottom: SPACING.space_20,
    paddingHorizontal: SPACING.space_16,
    paddingVertical: SPACING.space_12,
    position: 'absolute',
    right: SPACING.space_16,
  },
  label: {
    color: COLORS.neutral[700],
    fontFamily: Typography.primary.semiBold,
    fontSize: SPACING.space_12,
    lineHeight: SPACING.space_18,
  },
})
