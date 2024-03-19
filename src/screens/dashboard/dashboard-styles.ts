import { StyleSheet, ViewStyle } from 'react-native'

import { COLORS, SPACING } from '../../theme'

interface IStyles {
  container: ViewStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    backgroundColor: COLORS.white,
  },
})
