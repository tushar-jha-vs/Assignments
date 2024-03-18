import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Typography, SPACING } from '../../theme'

interface IStyles {
  header: ViewStyle
  image: ImageStyle
  title: TextStyle
  icon: ViewStyle
}

export const styles: IStyles = StyleSheet.create({
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
    marginLeft: SPACING.space_16,
    marginRight: SPACING.space_24,
    marginVertical: SPACING.space_16,
    width: SPACING.space_24,
  },
  icon: {
    height: SPACING.space_24,
    marginLeft: SPACING.space_16,
    marginRight: SPACING.space_24,
    marginVertical: SPACING.space_16,
    width: SPACING.space_24,
  },
  title: {
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_18,
    textAlign: 'center',
  },
})
