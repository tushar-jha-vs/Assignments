import { StyleSheet } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

export const styles = StyleSheet.create({
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
  headerImageContainertitle: {
    color: COLORS.primary['50'],
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_20,
  },
  headerProgressContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerProgressContainertitle: {
    color: COLORS.white,
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_32,
    lineHeight: SPACING.space_44,
    marginBottom: SPACING.space_12,
  },
})
