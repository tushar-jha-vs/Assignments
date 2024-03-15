import { StatusBar, StyleSheet } from 'react-native'
import { Typography } from '../../theme/typography'
import { COLORS } from '../../theme/colors'
import { SPACING } from '../../theme'

export const styles = StyleSheet.create({
  imageBackground: {
    flexDirection: 'column',
    width: '100%',
    height: SPACING.space_248,
    justifyContent: 'space-between',
  },

  container: {
    flex: SPACING.space_1,
    paddingTop: StatusBar.currentHeight,
  },
  subContainer: {
    flexDirection: 'row',
    gap: SPACING.space_12,
    alignItems: 'center',
    padding: SPACING.space_20,
  },
  image: {
    height: SPACING.space_16,
    width: SPACING.space_16,
  },
  text: {
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_14,
    color: COLORS.white,
  },
  bottomSubContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.space_20,
  },
  heroImage: {
    height: SPACING.space_148,
    width: SPACING.space_148,
  },
  title: {
    fontFamily: Typography.secondary.bold,
    color: COLORS.secondary[100],
    fontSize: SPACING.space_24,
  },
  days: {
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_14,
    color: COLORS.white,
  },
  textContainer: {
    marginBottom: SPACING.space_24,
  },
})
