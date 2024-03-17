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
    borderBottomColor: COLORS.primary[100],
    borderBottomWidth: SPACING.space_1,
    paddingBottom: SPACING.space_4,
    paddingHorizontal: SPACING.space_12,
    paddingTop: SPACING.space_12,
  },
  title: {
    color: COLORS.neutral[700],
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_21,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: SPACING.space_12,
  },
  subTitle: {
    color: COLORS.secondary[500],
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_21,
  },
  icon: {
    height: SPACING.space_16,
    width: SPACING.space_16,
  },
})

export default styles;