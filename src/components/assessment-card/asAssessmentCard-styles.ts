import { SPACING } from '../../theme'
import { COLORS } from './../../theme/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex:SPACING.space_1,
    paddingVertical:SPACING.space_32,
    borderTopLeftRadius:SPACING.space_16,
    borderTopRightRadius:SPACING.space_16,
    backgroundColor: COLORS.primary['500'],
  },
})
