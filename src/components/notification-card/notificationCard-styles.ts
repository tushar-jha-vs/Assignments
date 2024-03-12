import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

import {SPACING, COLORS, FONT_FAMILY} from '../../theme';

interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;
  icon: ImageStyle;
  text: TextStyle;
  textContainer: ViewStyle;
  subText: TextStyle;
}

export const styles: Styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.space_20,
    paddingVertical: SPACING.space_16,
  },
  subContainer: {
    flexDirection: 'row',
  },
  icon: {
    height: SPACING.space_48,
    paddingHorizontal: SPACING.space_4,
    paddingVertical: SPACING.space_2,
    width: SPACING.space_48,
  },
  text: {
    color: COLORS.black,
    fontFamily: FONT_FAMILY.QuicksandMedium,
    fontSize: SPACING.space_14,
    marginLeft: SPACING.space_20,
    marginRight: SPACING.space_8,
  },
  textContainer: {
    marginHorizontal: SPACING.space_76,
    marginVertical: SPACING.space_4,
  },
  subText: {
    color: COLORS.neutral600,
    fontFamily: FONT_FAMILY.QuicksandMedium,
    fontSize: SPACING.space_12,
  },
});
