import { StyleSheet, ImageStyle, ViewStyle } from 'react-native'

import { SPACING } from '../../../theme'

interface Styles {
  bgImage: ImageStyle
  container: ViewStyle
}

export const styles: Styles = StyleSheet.create({
  bgImage: {
    flex: SPACING.space_1,
  },
  container: {
    marginTop: SPACING.space_16,
  },
})
