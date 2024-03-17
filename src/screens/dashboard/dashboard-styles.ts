import { StyleSheet, ViewStyle } from 'react-native'

import { COLORS, SPACING } from '../../theme'

interface IStylesProps {
  container: ViewStyle
}

export const styles: IStylesProps = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    backgroundColor: COLORS.white,
  },
})
