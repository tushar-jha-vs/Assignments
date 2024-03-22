import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, SPACING, Typography } from '../../theme'

interface IStyles {
  tabBarStyle: ViewStyle
  tabBarLabel: TextStyle
  activeIcon: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  tabBarStyle: {
    height: '8%',
    position: 'absolute',
  },
  tabBarLabel: {
    lineHeight: SPACING.space_20,
    fontSize: SPACING.space_12,
    fontFamily: Typography.secondary.semiBold,
  },
  activeIcon: {
    color: COLORS.primary[50],
  },
})
