import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'
import { SPACING } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_36,
    gap: SPACING.space_16,
    backgroundColor: COLORS.primary[50],
  },
  image: {
    height: SPACING.space_72,
    width: SPACING.space_72,
  },
  detailContainer: {
    flex: SPACING.space_1,
  },
  detailTopContainer: {
    gap: SPACING.space_4,
  },
  listenIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listenContainer: {
    flexDirection: 'row',
    gap: SPACING.space_8,
  },
  title: {
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_16,
  },
  icon: {
    height: SPACING.space_16,
    width: SPACING.space_16,
  },
  detailBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'blue',
    alignItems: 'center',
  },
  time: {
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_12,
    color:COLORS.neutral['500'],
  },
  listenText: {
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_12,
  },
  imageContainer: {
    justifyContent: 'flex-end',
    backgroundColor: COLORS.primary[100],
    borderRadius: SPACING.space_8,
  },
  bottomSubContainer: {
    borderRadius: SPACING.space_50,
    backgroundColor: COLORS.white,
  },
  bottomSubContainerImage: {
    height: SPACING.space_12,
    width: SPACING.space_12,
    margin: SPACING.space_12,
  },
})
