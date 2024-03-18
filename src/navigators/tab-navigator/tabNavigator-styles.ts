import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'

import { COLORS, SPACING } from '../../theme'

interface Styles {
  tabBarStyle: ViewStyle
  tabBarIcon: ImageStyle
  iconContainer: ViewStyle
  activeIcon: ImageStyle
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
  iconContainer: {
    flex: SPACING.space_1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SPACING.space_100,
    marginBottom: SPACING.space_20,
  },
  activeIcon: {
    backgroundColor: COLORS.primary[100],
    borderRadius: SPACING.space_100,
    width: SPACING.space_50,
  },
  tabBarIcon: {
    height: SPACING.space_24,
    width: SPACING.space_24,
  },
})
