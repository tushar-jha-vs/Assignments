import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  title: TextStyle
  description: TextStyle
  footerContainer: ViewStyle
  footer: ViewStyle
  navigateLabel: TextStyle
  imageContainer: ViewStyle
  activeScreen: ViewStyle
  currentScreenContainer: ViewStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_24,
  },
  subContainer: {
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: Typography.primary.semiBold,
    fontSize: SPACING.space_28,
    lineHeight: SPACING.space_32,
    color: COLORS.neutral[400],
    marginTop: SPACING.space_88,
  },
  description: {
    fontFamily: Typography.primary.regular,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_22,
    textAlign: 'center',
    color: COLORS.neutral[100],
  },
  footerContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    marginBottom: SPACING.space_28,
    bottom: 0,
    left: 0,
    right: SPACING.space_0_5,
    paddingHorizontal: SPACING.space_24,
  },
  footer: {
    justifyContent: 'flex-end',
  },
  navigateLabel: {
    fontFamily: Typography.secondary.medium,
    fontSize: SPACING.space_12,
    lineHeight: SPACING.space_16,
    color: COLORS.neutral[600],
  },
  imageContainer: {
    width: SPACING.space_260,
    height: SPACING.space_260,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: SPACING.space_150,
    shadowColor: COLORS.neutral[300],
    overflow: 'hidden',
    elevation: SPACING.space_10,
    backgroundColor: COLORS.white,
  },
  activeScreen: {
    width: SPACING.space_12,
    height: SPACING.space_12,
    backgroundColor: COLORS.neutral['00'],
    borderRadius: SPACING.space_8,
  },
  currentScreenContainer: {
    flexDirection: 'row',
    gap: SPACING.space_4,
  },
})
