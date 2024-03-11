import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {COLORS, FONTSIZE, SPACING} from '../../theme/theme';

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
  subContainer: ViewStyle;
  text: TextStyle;
  subText: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    gap:SPACING.space_28,
    marginTop: 184,
    alignItems: 'center',
    justifyContent:"center",
    marginHorizontal: SPACING.space_20,
  },
  image: {
    width: 154,
    height: 154,
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: FONTSIZE.size_24,
    fontFamily: 'Fraunces_72pt-Bold',
    color: '#454545',
    marginBottom: 8,
  },
  subText: {
    lineHeight: SPACING.space_24,
    fontSize: FONTSIZE.size_16,
    textAlign: 'center',
    color: COLORS.neutral600,
    fontFamily: 'Quicksand-Medium',
    fontWeight: '500',
  },
});
