import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  detailContainer: ViewStyle
  countryTitle: TextStyle
  stats: TextStyle
  progressCircle: ViewStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    borderColor: COLORS.neutral['00'],
    borderRadius: SPACING.space_10,
    borderWidth: SPACING.space_1,
    flexDirection: 'row',
    marginBottom: SPACING.space_16,
    paddingHorizontal: SPACING.space_8,
    paddingVertical: SPACING.space_12,
  },
  progressCircle: {
    color: COLORS.neutral[500],
    fontFamily: Typography.secondary['bold'],
    fontSize: SPACING.space_16,
    position: 'absolute',
  },
  subContainer: {
    flex: SPACING.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.space_10,
  },
  detailContainer: {
    justifyContent: 'center',
  },
  countryTitle: {
    color: COLORS.neutral[500],
    fontFamily: Typography.secondary.semiBold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_22,
    marginBottom: SPACING.space_8,
  },
  stats: {
    fontFamily: Typography.secondary.medium,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_18,
  },
})
