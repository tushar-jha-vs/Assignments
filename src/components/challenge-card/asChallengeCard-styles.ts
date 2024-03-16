import { StyleSheet } from 'react-native'
import { COLORS, SPACING, Typography, palette } from '../../theme'

export const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    padding: SPACING.space_16,
    borderRadius: SPACING.space_16,
    marginBottom:SPACING.space_12,
  },
  detailContainer: {
    flex: SPACING.space_1,
  },
  duration: {
    color: COLORS.neutral['500'],
    fontFamily:Typography.primary.medium,
  },
  headerContainer: {
    flex:SPACING.space_1,
  },
  headerSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  headerSubContainerImage: {
    height: SPACING.space_16,
    width: SPACING.space_16,
  },
  headerSubContainerContent: {
    flexDirection: 'row',
    gap: SPACING.space_8,
  },
  headerSubContainerContentTitle:{
    fontFamily: Typography.primary.bold,
    color: palette.shark['500'],
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.space_8,
    paddingVertical: SPACING.space_16,
  },
  subContainer: {
    flexDirection: 'row',
    gap: SPACING.space_12,
  },
  title: {
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_20,
    fontFamily: Typography.secondary.bold,
    color: COLORS.neutral['700'],
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
