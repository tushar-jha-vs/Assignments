import { StyleSheet, ViewStyle } from 'react-native'
import { COLORS, SPACING } from '../../theme'

interface Styles {
  container: ViewStyle
  subContainer: ViewStyle
}

const styles: Styles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    marginBottom: SPACING.space_88,
    backgroundColor: COLORS.white,
  },
  subContainer: {
    marginHorizontal: SPACING.space_20,
    marginTop: SPACING.space_32,
  },
})

export default styles