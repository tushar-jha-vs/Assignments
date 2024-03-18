import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  detailBottomContainer: ViewStyle
  detailBottomSubContainer: ViewStyle
  detailBottomSubContainerImage: ImageStyle
  detailBottomSubContainerButton: ViewStyle
  detailBottomContainerText: TextStyle
  detailContainer: ViewStyle
  detailTopContainer: ViewStyle
  image: ImageStyle
  imageContainer: ViewStyle
  listenContainer: ViewStyle
  listenContainerImage: ImageStyle
  listenContainerText: TextStyle
  listenIconContainer: ViewStyle
  title: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary[50],
    flexDirection: 'row',
    gap: SPACING.space_16,
    paddingHorizontal: SPACING.space_36,
    paddingVertical: SPACING.space_24,
  },
  detailContainer: {
    flex: SPACING.space_1,
  },
  detailTopContainer: {
    gap: SPACING.space_4,
  },
  detailBottomContainerText: {
    color: COLORS.neutral['500'],
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_12,
    lineHeight: SPACING.space_18,
  },
  detailBottomContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailBottomSubContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SPACING.space_50,
  },
  detailBottomSubContainerImage: {
    height: SPACING.space_12,
    margin: SPACING.space_12,
    width: SPACING.space_12,
  },
  detailBottomSubContainerButton: {
    backgroundColor: COLORS.primary['500'],
    color: COLORS.white,
    alignItems: 'center',
    padding: SPACING.space_14,
  },
  image: {
    height: SPACING.space_72,
    width: SPACING.space_72,
  },
  imageContainer: {
    backgroundColor: COLORS.primary[100],
    borderRadius: SPACING.space_8,
    justifyContent: 'flex-end',
  },
  listenIconContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  listenContainer: {
    flexDirection: 'row',
    gap: SPACING.space_8,
  },
  listenContainerImage: {
    height: SPACING.space_16,
    width: SPACING.space_16,
  },
  listenContainerText: {
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_12,
  },
  title: {
    color: COLORS.neutral['700'],
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_16,
  },
})
