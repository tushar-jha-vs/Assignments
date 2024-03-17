import { StyleSheet, ViewStyle } from 'react-native'

import { COLORS, SPACING } from '../../theme'

interface IStyleProps {
  container: ViewStyle
}

export const styles: IStyleProps = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary['500'],
    borderTopLeftRadius: SPACING.space_16,
    borderTopRightRadius: SPACING.space_16,
    flex: SPACING.space_1,
    paddingVertical: SPACING.space_32,
  },
})
