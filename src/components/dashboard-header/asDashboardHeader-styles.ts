import { ImageStyle, StatusBar, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  bottomSubContainer: ViewStyle
  container: ViewStyle
  image: ImageStyle
  imageBackground: ImageStyle
  subContainer: ViewStyle
  subContainerDate: TextStyle
  subContainerImage: ImageStyle
  textContainer: ViewStyle
  textContainerDay: TextStyle
  textContainerTitle: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  bottomSubContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.space_20,
  },
  container: {
    paddingTop: SPACING.space_16,
    gap:SPACING.space_24,
  },
  image: {
    height: SPACING.space_148,
    width: SPACING.space_148,
  },
  imageBackground: {
    flexDirection: 'column',
    height: SPACING.space_248,
    justifyContent: 'space-between',
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: SPACING.space_12,
    padding: SPACING.space_20,
  },
  subContainerDate: {
    color: COLORS.white,
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_14,
  },
  subContainerImage: {
    height: SPACING.space_16,
    width: SPACING.space_16,
  },
  textContainer: {
    marginBottom: SPACING.space_24,
  },
  textContainerDay: {
    color: COLORS.white,
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_14,
  },
  textContainerTitle: {
    color: COLORS.secondary[100],
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_24,
  },
})
