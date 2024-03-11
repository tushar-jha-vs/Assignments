import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {COLORS, FONTSIZE, SPACING} from '../../theme/theme';

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
    paddingVertical: SPACING.space_16,
    paddingHorizontal: SPACING.space_20,
  },
  subContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 48,
    height: 48,
    paddingVertical: SPACING.space_2,
    paddingHorizontal: SPACING.space_4,
  },
  text: {
    fontFamily: 'Quicksand-Medium',
    fontWeight: '500',
    marginLeft: SPACING.space_20,
    marginRight: SPACING.space_8,
    fontSize: FONTSIZE.size_14,
    color: 'black',
  },
  textContainer: {
    marginHorizontal: 76,
    marginVertical: SPACING.space_4,
  },
  subText: {
    fontFamily: 'Quicksand-Medium',
    fontWeight: '500',
    fontSize: FONTSIZE.size_12,
    color: COLORS.neutral600,
  },
});
