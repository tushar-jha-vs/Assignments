import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../../theme'

interface IStyles {
  mainContainer: ViewStyle
  imageContainer: ViewStyle
  image: ViewStyle
  reflectionsButton: ViewStyle
  label: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_172,
    gap: SPACING.space_32,
    flex: SPACING.space_1,
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
