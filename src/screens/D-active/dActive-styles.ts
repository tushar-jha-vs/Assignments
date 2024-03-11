import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {COLORS, FONTSIZE, SPACING} from '../../theme/theme';

interface Styles {
  header: ViewStyle;
  icon: ImageStyle;
  title: TextStyle;
  subContainer: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: SPACING.space_16,
    paddingHorizontal: SPACING.space_24,
    marginBottom: SPACING.space_16,
  },
  subContainer: {
    marginBottom: SPACING.space_24,
    marginHorizontal: SPACING.space_20,
    gap: 20,
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
    lineHeight: SPACING.space_24,
    textAlign: 'center',
    fontSize: FONTSIZE.size_18,
    color: COLORS.neutral700,
  },
});
