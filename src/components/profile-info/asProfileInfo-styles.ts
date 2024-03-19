import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  title: TextStyle
  subTitle: TextStyle
}

const styles: IStyles = StyleSheet.create({
  container: {
    marginBottom: SPACING.space_36,
    marginLeft: SPACING.space_21,
    marginTop: SPACING.space_28,
  },
  title: {
    color: COLORS.white,
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_16,
    marginBottom: SPACING.space_12,
  },
  subTitle: {
    color: COLORS.white,
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_14,
  },
})

export default styles