import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  imageContainer: ViewStyle
  image: ImageStyle
  title: TextStyle
  progress: ViewStyle
  pieChart: ViewStyle
  percentLabel: TextStyle
  icon: ImageStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    borderBottomColor: COLORS.primary[100],
    borderBottomWidth: SPACING.space_1,
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
  imageContainer: {
    backgroundColor: COLORS.accent[50],
    borderRadius: SPACING.space_20,
    height: SPACING.space_40,
    marginRight: SPACING.space_12,
    width: SPACING.space_40,
  },
  image: {
    width: SPACING.space_40,
    height: SPACING.space_40,
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
  pieChart: {
    backgroundColor: COLORS.secondary[200],
    borderRadius: SPACING.space_100,
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
