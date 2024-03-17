import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS, SPACING, Typography } from '../../theme'

interface IStyleProps {
  bottomContainer: ViewStyle
  bottomContainerImage: ImageStyle
  bottomContainerTitle: TextStyle
  container: ViewStyle
  detailContainer: ViewStyle
  subContainer: ViewStyle
  subContainerTitle: TextStyle
}

export const styles: IStyleProps = StyleSheet.create({
  bottomContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: SPACING.space_4,
  },
  bottomContainerImage: {
    height: SPACING.space_12,
    width: SPACING.space_12,
  },
  bottomContainerTitle: {
    color: COLORS.white,
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_20,
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.primary['700'],
    paddingVertical: SPACING.space_24,
  },
  detailContainer: {
    flexDirection: 'row',
    gap: SPACING.space_8,
    marginBottom: SPACING.space_20,
  },
  subContainer: {
    gap: SPACING.space_24,
  },
  subContainerTitle: {
    color: COLORS.white,
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_18,
    lineHeight: SPACING.space_24,
    marginBottom: SPACING.space_24,
    textAlign: 'center',
  },
})
