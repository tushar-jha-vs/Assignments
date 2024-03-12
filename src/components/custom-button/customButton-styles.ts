import {ImageStyle, StyleSheet} from 'react-native';
import {COLORS, SPACING, FONT_FAMILY} from '../../theme';

interface Styles {
  customButton: ImageStyle;
}

export const styles: Styles = StyleSheet.create({
  customButton: {
    backgroundColor: COLORS.white,
    borderRadius: SPACING.space_8,
    color: COLORS.neutral600,
    elevation: SPACING.space_8,
    fontFamily: FONT_FAMILY.QuicksandSemiBold,
    fontSize: SPACING.space_16,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_12,
    shadowColor: COLORS.tundora,
  },
});
