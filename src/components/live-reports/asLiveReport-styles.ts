import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  reportsContainer: ViewStyle
  paginationContainer: ViewStyle
  arrowSubContainer: ViewStyle
  reportLabel: TextStyle
  countriesListLabel: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    padding: SPACING.space_20,
  },
  reportLabel: {
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_21,
    color: COLORS.neutral[400],
    fontFamily: Typography.secondary.bold,
  },
  reportsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: SPACING.space_8,
    borderColor: COLORS.neutral['00'],
    borderWidth: SPACING.space_1,
    paddingHorizontal: SPACING.space_8,
  },
  arrowSubContainer: {
    marginHorizontal: SPACING.space_8,
  },
  countriesListLabel: {
    fontSize: SPACING.space_12,
    lineHeight: SPACING.space_18,
    color: COLORS.neutral[100],
    fontFamily: Typography.secondary.medium,
  },
})
