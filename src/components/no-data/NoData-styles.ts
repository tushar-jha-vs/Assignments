import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native'

import { SPACING, Typography } from '../../theme'

interface Styles {
  container: ViewStyle
  subContainer: ViewStyle
  image: ImageStyle
  text: TextStyle
  subText: TextStyle
}
export const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
    flex: SPACING.space_1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subContainer: {
    justifyContent: 'center',
    marginHorizontal: SPACING.space_20,
  },
  image: {
    alignSelf: 'center',
    height: SPACING.space_154,
    marginHorizontal: 'auto',
    width: SPACING.space_154,
  },
  text: {
    fontFamily: Typography['secondary'].bold,
    fontSize: SPACING.space_28,
    textAlign: 'center',
  },
  subText: {
    fontFamily: Typography['primary'].medium,
    fontSize: SPACING.space_16,
    textAlign: 'center',
  },
})
