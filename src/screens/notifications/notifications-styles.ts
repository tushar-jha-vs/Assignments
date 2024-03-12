import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

import {SPACING, COLORS} from '../../theme';

interface Styles {
  header: ViewStyle;
  icon: ImageStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  header: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    gap: SPACING.space_16,
    justifyContent: 'space-between',
    marginBottom: SPACING.space_16,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_16,
  },
  icon: {
    height: SPACING.space_24,
    marginLeft: SPACING.space_16,
    marginRight: SPACING.space_24,
    marginVertical: SPACING.space_16,
    width: SPACING.space_24,
  },
  title: {
    color: COLORS.neutral700,
    fontFamily: 'Fraunces_72pt-Bold',
    fontSize: SPACING.space_18,
    textAlign: 'center',
  },
});
