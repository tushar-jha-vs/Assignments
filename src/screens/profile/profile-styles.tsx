import { StyleSheet, ViewStyle } from 'react-native'

import { COLORS, SPACING } from '../../theme'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
}

const styles: IStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: SPACING.space_1,
    marginBottom: SPACING.space_88,
  },
  subContainer: {
    marginHorizontal: SPACING.space_20,
    marginTop: SPACING.space_32,
  },
})

export default styles
