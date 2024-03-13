import { COLORS } from '../theme'

export const buttonsText = ['2min', '4min', '8min']

interface DActiveCardInfoType {
  imageSource: number
  textColor: string
}
export const DActiveCardInfo: { [key: string]: DActiveCardInfoType } = {
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
