import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  imageContainer: ViewStyle
  image: ImageStyle
  detailContainer: ViewStyle
  headerContainer: ViewStyle
  headerSubContainer: ViewStyle
  headerSubContainerContent: ViewStyle
  headerSubContainerContentImage: ImageStyle
  headerSubContainerContentTitle: TextStyle
  headerSubContainerImage: ImageStyle
  title: TextStyle
  bottomContainer: ViewStyle
  duration: TextStyle
  bottomSubContainer: ViewStyle
  bottomSubContainerButton: ViewStyle
  bottomSubContainerImage: ImageStyle
}

export const styles: IStyles = StyleSheet.create({
  bottomContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomSubContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SPACING.space_50,
  },
  bottomSubContainerImage: {
    height: SPACING.space_12,
    width: SPACING.space_12,
    margin: SPACING.space_12,
  },
  bottomSubContainerButton: {
    alignItems: 'center',
    backgroundColor: COLORS.primary['500'],
    color: COLORS.white,
    padding: SPACING.space_14,
  },
  container: {
    borderRadius: SPACING.space_16,
    justifyContent: 'center',
    marginBottom: SPACING.space_12,
    padding: SPACING.space_16,
  },
  detailContainer: {
    flex: SPACING.space_1,
  },
  duration: {
    color: COLORS.neutral['500'],
    fontFamily: Typography.primary.medium,
  },
  headerContainer: {
    flex: SPACING.space_1,
  },
  headerSubContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerSubContainerImage: {
    height: SPACING.space_16,
    width: SPACING.space_16,
  },
  headerSubContainerContent: {
    flexDirection: 'row',
    gap: SPACING.space_8,
  },
  headerSubContainerContentTitle: {
    fontSize: SPACING.space_12,
    color: COLORS.neutral['500'],
    fontFamily: Typography.primary.bold,
  },
  headerSubContainerContentImage: {
    height: SPACING.space_16,
    width: SPACING.space_16,
  },
  image: {
    height: SPACING.space_40,
    width: SPACING.space_52,
  },
  imageContainer: {
    paddingHorizontal: SPACING.space_8,
    paddingVertical: SPACING.space_16,
  },
  subContainer: {
    flexDirection: 'row',
    gap: SPACING.space_12,
  },
  title: {
    color: COLORS.neutral['700'],
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_20,
  },
})
