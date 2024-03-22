import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  label: TextStyle
  affectedLabelsContainer: ViewStyle
  affected: ViewStyle
  mostAffectedContainer: ViewStyle
  leastAffectedContainer: ViewStyle
  affectedLabel: TextStyle
  mapImage: ViewStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_16,
    flex: SPACING.space_1,
  },
  mapImage: {
    alignItems: 'center',
    borderColor: COLORS.neutral['00'],
    borderRadius: SPACING.space_10,
    borderWidth: SPACING.space_1,
    justifyContent: 'center',
    marginTop: SPACING.space_28,
  },
  subContainer: {
    borderColor: COLORS.neutral['00'],
    borderRadius: SPACING.space_10,
    borderWidth: SPACING.space_1,
    paddingHorizontal: SPACING.space_10,
    paddingVertical: SPACING.space_16,
  },
  label: {
    color: COLORS.neutral[400],
    fontFamily: Typography.secondary.semiBold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_22,
    marginBottom: SPACING.space_8,
    textAlign: 'left',
  },
  leastAffectedContainer: {
    backgroundColor: COLORS.primary[50],
    height: SPACING.space_12,
    width: SPACING.space_12,
  },
  mostAffectedContainer: {
    backgroundColor: COLORS.primary[50],
    height: SPACING.space_12,
    width: SPACING.space_12,
  },
  affectedLabel: {
    lineHeight: SPACING.space_18,
    fontSize: SPACING.space_12,
    fontFamily: Typography.secondary.medium,
    color: COLORS.neutral[100],
  },
  affected: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: SPACING.space_12,
    justifyContent: 'center',
  },
  affectedLabelsContainer: {
    flexDirection: 'row',
    gap: SPACING.space_22,
    justifyContent: 'flex-start',
  },
})
