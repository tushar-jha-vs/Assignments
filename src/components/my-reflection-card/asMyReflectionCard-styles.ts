import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface Styles {
  container: ViewStyle
  title: TextStyle
  subContainer: ViewStyle
  subTitle: TextStyle
  icon: ImageStyle
}

const styles: Styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.space_12,
    paddingTop: SPACING.space_12,
    paddingBottom: SPACING.space_4,
    borderBottomColor: COLORS.primary[100],
    borderBottomWidth: SPACING.space_1,
  },
  title: {
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_21,
    color: COLORS.neutral[700],
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: SPACING.space_12,
  },
  subTitle: {
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_21,
    color: COLORS.secondary[500],
  },
  icon: {
    height: SPACING.space_16,
    width: SPACING.space_16,
  },
})

export default styles;