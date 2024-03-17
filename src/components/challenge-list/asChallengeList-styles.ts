import { StyleSheet, ViewStyle } from 'react-native'

import { SPACING } from '../../theme'

interface IStyleProps {
  container: ViewStyle
}

export const styles: IStyleProps = StyleSheet.create({
  container: {
    flexGrow: SPACING.space_1,
    marginHorizontal: SPACING.space_20,
    marginTop: SPACING.space_16,
  },
})
