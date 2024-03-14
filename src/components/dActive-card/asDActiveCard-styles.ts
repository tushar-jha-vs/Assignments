import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { SPACING, Typography } from '../../theme'

interface Styles {
  container: ViewStyle
  textContainer: ViewStyle
  buttonContainer: ViewStyle
  title: TextStyle
}

export const styles: Styles = StyleSheet.create({
  container: {
    borderRadius: SPACING.space_20,
    flex: SPACING.space_1,
    marginBottom: SPACING.space_20,
    overflow: 'hidden',
  },
  textContainer: {
    paddingHorizontal: SPACING.space_16,
    paddingVertical: SPACING.space_8,
  },
  title: {
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_18,
    lineHeight: SPACING.space_24,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.space_48,
    paddingHorizontal: SPACING.space_16,
    paddingVertical: SPACING.space_8,
  },
})
