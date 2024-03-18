import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  bottomContainer: ViewStyle
  bottomContainerButtons: ViewStyle
  bottomContainerContent: ViewStyle
  bottomContainerInput: TextStyle
  bottomContainerTitle: TextStyle
  button: ViewStyle
  buttonTitle: TextStyle
  container: ViewStyle
  emptyContainerOne: ViewStyle
  emptyContainerTwo: ViewStyle
  headerContainer: ViewStyle
  headerContainerRange: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SPACING.space_16,
    gap: SPACING.space_24,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_32,
  },
  bottomContainerContent: {
    backgroundColor: COLORS.primary['50'],
    borderRadius: SPACING.space_8,
    paddingHorizontal: SPACING.space_16,
    paddingVertical: SPACING.space_20,
  },
  bottomContainerTitle: {
    color: COLORS.neutral['700'],
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_24,
  },
  bottomContainerInput: {
    color: COLORS.neutral['700'],
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_16,
    height: SPACING.space_300,
    marginTop: SPACING.space_28,
    textAlignVertical: 'top',
  },
  bottomContainerButtons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    paddingHorizontal: SPACING.space_20,
  },
  buttonTitle: {
    color: COLORS.primary['600'],
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_24,
    textAlign: 'center',
  },
  container: {
    marginTop: SPACING.space_4,
    marginHorizontal: SPACING.space_20,
    gap: SPACING.space_24,
  },
  emptyContainerOne: {
    backgroundColor: COLORS.primary['300'],
    borderRadius: SPACING.space_8,
    marginHorizontal: SPACING.space_16,
    marginTop: -SPACING.space_76,
    paddingVertical: SPACING.space_32,
    zIndex: -SPACING.space_1,
  },
  emptyContainerTwo: {
    backgroundColor: COLORS.primary['500'],
    borderRadius: SPACING.space_8,
    marginHorizontal: SPACING.space_24,
    marginTop: -SPACING.space_76,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_32,
    zIndex: -SPACING.space_2,
  },
  headerContainer: {
    alignItems: 'center',
    gap: SPACING.space_12,
    marginHorizontal: SPACING.space_16,
  },
  headerContainerRange: {
    color: COLORS.white,
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_20,
    textAlign: 'center',
  },
})
