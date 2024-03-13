import { COLORS } from '../theme'
import { IDActiveCardInfoType } from '../types'

export const buttonsText = ['2min', '4min', '8min']

export const D_ACTIVE_CARD_INFO: { [key: string]: IDActiveCardInfoType } = {
  'Outer Ring': {
    imageSource: require('../assets/images/outer-ring.png'),
    textColor: COLORS.secondary[600],
  },
  'Focus': {
    imageSource: require('../assets/images/focus.png'),
    textColor: COLORS.primary[700],
  },
  'Follow': {
    imageSource: require('../assets/images/follow.png'),
    textColor: COLORS.neutral[600],
  },
  'Scan': {
    imageSource: require('../assets/images/scan.png'),
    textColor: COLORS.accent[600],
  },
  'Square': {
    imageSource: require('../assets/images/square.png'),
    textColor: COLORS.primary[700],
  },
}

export const TEXT_GRADIENT_LOCATION = [0, 0.8792, 1]
export const BUTTON_GRADIENT_LOCATION = [0, 0.7]
