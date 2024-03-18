import { StyleSheet, ImageStyle, ViewStyle } from 'react-native'

import { SPACING } from '../../../theme'

interface IStyles {
  container: ViewStyle
  bgImage: ImageStyle
  subContainer: ViewStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
  },
  bgImage: {
    flex: SPACING.space_1,
  },
  subContainer: {
    marginTop: SPACING.space_16,
  },
})
