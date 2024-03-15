import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS, SPACING, Typography } from '../../theme'

interface Styles {
  container: ViewStyle
  title: TextStyle
  subTitle: TextStyle
}

const styles: Styles = StyleSheet.create({
  container: {
    marginLeft: SPACING.space_21,
    marginBottom: SPACING.space_36,
    marginTop: SPACING.space_28,
  },
  title: {
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_16,
    color: COLORS.white,
    marginBottom: SPACING.space_12,
  },
  subTitle: {
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_14,
    color: COLORS.white,
  },
})

export default styles