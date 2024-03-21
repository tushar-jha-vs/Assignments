import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING } from '../../theme'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  title: TextStyle
  message: TextStyle
  buttonContainer: ViewStyle
  button: ViewStyle
  confirmButton: ViewStyle
  buttonLabel: TextStyle
  confirmButtonLabel: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.neutral['00'],
  },
  subContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SPACING.space_10,
    padding: SPACING.space_20,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: SPACING.space_18,
    fontWeight: 'bold',
    marginBottom: SPACING.space_10,
  },
  message: {
    fontSize: SPACING.space_16,
    marginBottom: SPACING.space_20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    paddingVertical: SPACING.space_10,
    paddingHorizontal: SPACING.space_20,
    borderRadius: SPACING.space_8,
    borderWidth: SPACING.space_1,
    borderColor: COLORS.neutral['00'],
  },
  confirmButton: {
    backgroundColor: COLORS.failure,
  },
  buttonLabel: {
    fontSize: SPACING.space_16,
    textAlign: 'center',
  },
  confirmButtonLabel: {
    color: COLORS.white,
  },
})
