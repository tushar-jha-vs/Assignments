import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'

import { SPACING } from '../../theme'

interface Styles {
  tabBarStyle: ViewStyle
  icon: ImageStyle
}

export const styles: Styles = StyleSheet.create({
  tabBarStyle: {
    borderTopLeftRadius: SPACING.space_16,
    borderTopRightRadius: SPACING.space_16,
    height: SPACING.space_88,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_20,
    position: 'absolute',
  },
  icon: {
    height: SPACING.space_24,
    margin: SPACING.space_20,
    width: SPACING.space_24,
  },
})
