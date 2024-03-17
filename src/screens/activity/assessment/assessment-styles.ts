import { StyleSheet, ViewStyle } from 'react-native'

import { SPACING } from '../../../theme'

interface IStyleProps {
  container: ViewStyle
}

export const styles: IStyleProps = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
  },
})
