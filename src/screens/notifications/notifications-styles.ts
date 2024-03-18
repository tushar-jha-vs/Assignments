import { StyleSheet, ViewStyle } from 'react-native'

import { SPACING } from '../../theme'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: SPACING.space_1,
    marginBottom: SPACING.space_88,
  },
  subContainer: {
    flexGrow: SPACING.space_1,
  },
})
