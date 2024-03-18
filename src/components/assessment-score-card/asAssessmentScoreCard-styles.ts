import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  bottomContainer: ViewStyle
  bottomContainerTitle: TextStyle
  headerContainer: ViewStyle
  headerImageContainer: ViewStyle
  headerImageContainerImage: ImageStyle
  headerImageContainerTitle: TextStyle
  headerProgressContainer: ViewStyle
  headerProgressContainerTitle: TextStyle
  progressBarOuterContainer: ViewStyle
  progressBarInnerContainer: ViewStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginBottom: SPACING.space_28,
    marginHorizontal: SPACING.space_20,
  },
  bottomContainer: {
    alignItems: 'center',
  },
  bottomContainerTitle: {
    color: COLORS.white,
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_20,
    textAlign: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.space_16,
  },
  headerImageContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerImageContainerImage: {
    height: SPACING.space_40,
    width: SPACING.space_40,
  },
  headerImageContainerTitle: {
    color: COLORS.primary['50'],
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_20,
  },
  headerProgressContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerProgressContainerTitle: {
    color: COLORS.white,
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_32,
    lineHeight: SPACING.space_44,
    marginBottom: SPACING.space_12,
  },
  progressBarOuterContainer: {
    height: SPACING.space_12,
    color: COLORS.white,
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    borderRadius: SPACING.space_100,
    width: SPACING.space_140,
  },
  progressBarInnerContainer: {
    height: SPACING.space_12,
    borderRadius: SPACING.space_8,
  },
})
