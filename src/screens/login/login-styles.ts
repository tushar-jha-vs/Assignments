import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  title: TextStyle
  numberContainer: ViewStyle
  inputLabel: TextStyle
  inputArea: TextStyle
  passwordContainer: ViewStyle
  signInButton: ViewStyle
  buttonLabel: TextStyle
  error: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_52,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: COLORS.primary[50],
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_28,
    lineHeight: SPACING.space_32,
    marginTop: SPACING.space_32,
    textAlign: 'center',
  },
  numberContainer: {
    gap: SPACING.space_4,
    marginTop: SPACING.space_62,
  },
  inputLabel: {
    color: COLORS.neutral[200],
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_24,
  },
  inputArea: {
    borderColor: COLORS.neutral[50],
    borderWidth: SPACING.space_1,
    borderRadius: SPACING.space_16,
    padding: SPACING.space_16,
  },
  passwordContainer: {
    gap: SPACING.space_4,
  },
  signInButton: {
    backgroundColor: COLORS.primary[50],
    borderRadius: SPACING.space_8,
    padding: SPACING.space_16,
  },
  buttonLabel: {
    fontFamily: Typography.secondary.medium,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_20,
    textAlign: 'center',
  },
  error: {
    color: COLORS.failure,
    fontFamily: Typography.secondary.medium,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_24,
    marginBottom: SPACING.space_4,
  },
})
