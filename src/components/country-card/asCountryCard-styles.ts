import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  country: ViewStyle
  flagImage: ImageStyle
  countryName: TextStyle
  casesContainer: ViewStyle
  case: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    borderColor: COLORS.neutral['00'],
    borderRadius: SPACING.space_10,
    borderWidth: SPACING.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.space_16,
    marginHorizontal: SPACING.space_10,
    padding: SPACING.space_24,
  },
  country: {
    gap: SPACING.space_8,
    flexDirection: 'row',
    flex: SPACING.space_1,
  },
  flagImage: {
    borderRadius: SPACING.space_8,
    height: SPACING.space_32,
    width: SPACING.space_48,
  },
  countryName: {
    color: COLORS.neutral[500],
    fontFamily: Typography.primary.regular,
    fontSize: SPACING.space_22,
    lineHeight: SPACING.space_28,
  },
  casesContainer: {
    alignItems: 'center',
    flex: SPACING.space_1,
    flexDirection: 'row',
    gap: SPACING.space_8,
    justifyContent: 'flex-end',
  },
  case: {
    color: COLORS.neutral[500],
    fontFamily: Typography.secondary.semiBold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_22,
  },
})
