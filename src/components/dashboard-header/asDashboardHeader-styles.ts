import { ImageStyle, StatusBar, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyleProps {
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

export const styles: IStyleProps = StyleSheet.create({
  bottomSubContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.space_20,
  },
  container: {
    flex: SPACING.space_1,
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    height: SPACING.space_148,
    width: SPACING.space_148,
  },
  imageBackground: {
    flexDirection: 'column',
    height: SPACING.space_248,
    justifyContent: 'space-between',
    width: '100%',
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
