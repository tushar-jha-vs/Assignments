import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  icon: ImageStyle
  modalContainer: ViewStyle
  modalTitle: TextStyle
  title: TextStyle
  webViewContainer: ViewStyle
}

const styles: IStyles = StyleSheet.create({
  container: {
    borderBottomColor: COLORS.primary[100],
    borderBottomWidth: SPACING.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.space_20,
  },
  title: {
    color: COLORS.neutral[700],
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_24,
  },
  icon: {
    height: SPACING.space_16,
    width: SPACING.space_16,
  },
  webViewContainer: {
    height: '90%',
    width: '90%',
  },
  modalContainer: {
    alignItems: 'center',
    flex: SPACING.space_1,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  modalTitle: {
    fontSize: SPACING.space_18,
  },
})

export default styles
