import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS, SPACING, Typography } from '../../theme'

interface IStyleProps {
  detailSubContainer: ViewStyle
  detailSubContainerFooter: ViewStyle
  detailSubContainerFooterProgress: ViewStyle
  detailSubContainerFooterProgressTitle: TextStyle
  detailSubContainerFooterTitle: TextStyle
  detailSubContainerImage: ImageStyle
}

export const styles: IStyleProps = StyleSheet.create({
  detailSubContainer: {
    alignItems: 'center',
  },
  detailSubContainerFooter: {
    gap: SPACING.space_12,
  },
  detailSubContainerFooterProgress: {
    alignItems: 'center',
    gap: SPACING.space_8,
  },
  detailSubContainerFooterProgressTitle: {
    color: COLORS.white,
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_20,
    textAlign: 'center',
  },
  detailSubContainerFooterTitle: {
    color: COLORS.white,
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_20,
    textAlign: 'center',
  },
  detailSubContainerImage: {
    backgroundColor: COLORS.white,
    borderRadius: SPACING.space_50,
    height: SPACING.space_76,
    marginBottom: SPACING.space_8,
    width: SPACING.space_76,
  },
})
