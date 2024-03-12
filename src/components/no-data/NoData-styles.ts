import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

import {SPACING, COLORS, FONT_FAMILY} from '../../theme';

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
  subContainer: ViewStyle;
  text: TextStyle;
  subText: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
    flex: SPACING.space_1,
    gap: SPACING.space_28,
    justifyContent: 'center',
    marginHorizontal: SPACING.space_20,
    marginTop: SPACING.space_184,
  },
  image: {
    height: SPACING.space_154,
    width: SPACING.space_154,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.tundora,
    fontFamily: FONT_FAMILY.Fraunces,
    fontSize: SPACING.space_24,
    marginBottom: SPACING.space_8,
  },
  subText: {
    color: COLORS.neutral600,
    fontFamily: FONT_FAMILY.QuicksandMedium,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_24,
    textAlign: 'center',
  },
});
