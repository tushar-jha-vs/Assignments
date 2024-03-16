import { StyleSheet } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    borderBottomColor: COLORS.primary[100],
    borderBottomWidth: 1,
    flex: SPACING.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: SPACING.space_40,
    marginVertical: SPACING.space_16,
  },
  image: {
    marginRight: SPACING.space_12,
    width: SPACING.space_40,
  },
  title: {
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_20,
  },
  progress: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  percentLabel: {
    color: COLORS.charcoal,
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_20,
    marginRight: SPACING.space_8,
  },
  icon: {
    height: SPACING.space_16,
    marginLeft: SPACING.space_16,
    width: SPACING.space_16,
  },
})
