import {COLORS} from '../theme';

export const buttonGradientColor = ['#FFFFFF00', '#FFFFFFCC'];
export const textGradientColor = ['#FFFFFF8F', '#FFFFFF1E', '#FFFFFF00'];
export const buttonsText = ['2min', '4min', '8min'];
export const DActiveImageSource: {[key: string]: number} = {
  'Outer Ring': require('../assets/images/outer-ring.png'),
  Focus: require('../assets/images/focus.png'),
  Follow: require('../assets/images/follow.png'),
  Scan: require('../assets/images/scan.png'),
  Square: require('../assets/images/square.png'),
};

export const DActiveTextColor: {[key: string]: string} = {
  Focus: COLORS.primary700,
  Follow: COLORS.neutral600,
  Scan: COLORS.accent700,
  'Outer Ring': COLORS.secondary600,
  Square: COLORS.primary700,
};
