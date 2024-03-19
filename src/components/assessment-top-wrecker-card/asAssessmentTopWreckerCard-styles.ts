import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  containerImage: ImageStyle
  subContainerFooter: ViewStyle
  subContainerFooterProgress: ViewStyle
  subContainerFooterProgressTitle: TextStyle
  subContainerFooterTitle: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: SPACING.space_24,
  },
  subContainerFooter: {
    gap: SPACING.space_12,
  },
  subContainerFooterProgress: {
    alignItems: 'center',
    gap: SPACING.space_8,
  },
  subContainerFooterProgressTitle: {
    color: COLORS.white,
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_20,
    textAlign: 'center',
  },
  subContainerFooterTitle: {
    color: COLORS.white,
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_20,
    textAlign: 'center',
  },
  containerImage: {
    backgroundColor: COLORS.white,
    borderRadius: SPACING.space_50,
    height: SPACING.space_76,
    marginBottom: SPACING.space_8,
    width: SPACING.space_76,
  },
})
