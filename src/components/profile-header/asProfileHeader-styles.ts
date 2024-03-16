import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, Typography, SPACING } from '../../theme'

interface Styles {
  container: ViewStyle
  header: ViewStyle
  image: ImageStyle
  title: TextStyle
  icon: ViewStyle
}

const styles: Styles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: SPACING.space_16,
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_16,
  },
  image: {
    height: SPACING.space_24,
    width: SPACING.space_24,
  },
  icon: {
    height: SPACING.space_24,
    width: SPACING.space_24,
  },
  title: {
    color: COLORS.white,
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_18,
    textAlign: 'center',
  },
})

export default styles
