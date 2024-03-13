import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native'

import { SPACING, COLORS, Typography } from '../../theme'

interface Styles {
  container: ViewStyle
  subContainer: ViewStyle
  image: ImageStyle
  text: TextStyle
  textContainer: ViewStyle
  subText: TextStyle
}

export const styles: Styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.space_20,
    paddingVertical: SPACING.space_16,
    borderBottomWidth: SPACING.space_1,
    borderBottomColor: COLORS.neutral[100],
  },
  subContainer: {
    flexDirection: 'row',
  },
  image: {
    height: SPACING.space_48,
    paddingHorizontal: SPACING.space_4,
    paddingVertical: SPACING.space_2,
    width: SPACING.space_48,
  },
  text: {
    color: COLORS.neutral[600],
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_14,
    marginLeft: SPACING.space_20,
    marginRight: SPACING.space_8,
  },
  textContainer: {
    marginHorizontal: SPACING.space_76,
    marginVertical: SPACING.space_4,
  },
  subText: {
    color: COLORS.neutral[600],
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_12,
  },
})
