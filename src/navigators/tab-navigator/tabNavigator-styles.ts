import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'

import { SPACING } from '../../theme'

interface Styles {
  tabBarStyle: ViewStyle
  tabBarIcon: ImageStyle
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
  tabBarIcon: {
    height: SPACING.space_24,
    width: SPACING.space_24,
  },
})
