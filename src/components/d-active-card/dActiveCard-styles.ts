import {Platform, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS, FONTSIZE, SPACING} from '../../theme/theme';

interface Styles {
  container: ViewStyle;
  textContainer: ViewStyle;
  buttonContainer: ViewStyle;
  title: TextStyle;
  button: TextStyle;
}

export const styles: Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.space_20,
    paddingTop: SPACING.space_24,
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 20,
    marginBottom: 20,
  },
  textContainer: {
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_16,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontFamily: 'Fraunces_72pt-Bold',
    fontWeight: '700',
    lineHeight: SPACING.space_24,
    fontSize: FONTSIZE.size_18,
  },
  buttonContainer: {
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_16,
    marginTop: 48,
    flexDirection: 'row',
    gap: 12,
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'white',
    fontFamily: 'Quicksand-Semibold',
    paddingVertical: SPACING.space_12,
    paddingHorizontal: SPACING.space_24,
    borderRadius: SPACING.space_8,
    fontWeight: '600',
    fontSize: FONTSIZE.size_16,
    color: COLORS.neutral600,
    ...Platform.select({
      ios: {
        shadowColor: '#4b4b4b',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: SPACING.space_4,
      },
      android: {
        elevation: SPACING.space_8,
      },
    }),
  },
});
