import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {COLORS, FONTSIZE, SPACING} from '../../theme/theme';

interface Styles {
  header: ViewStyle;
  icon: ImageStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: SPACING.space_16,
    paddingHorizontal: SPACING.space_24,
    gap: SPACING.space_16,
    marginBottom: SPACING.space_16,
  },
  icon: {
    width: 24,
    height: 24,
    marginVertical: SPACING.space_16,
    marginRight: SPACING.space_24,
    marginLeft: SPACING.space_16,
  },
  title: {
    fontFamily: 'Fraunces_72pt-Bold',
    textAlign: 'center',
    fontSize: FONTSIZE.size_18,
    color: COLORS.neutral700,
  },
});
