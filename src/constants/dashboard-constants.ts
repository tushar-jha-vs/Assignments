import { COLORS } from '../theme'

export const CHALLENGE_IMAGE_SOURCE: { [key: string]: string } = {
  bookmark: require('../assets/icons/marked-favourite.png'),
  completedTick: require('../assets/icons/complete.png'),
  playButton: require('../assets/icons/audio.png'),
  removeBookmark: require('../assets/icons/not-marked-favourite.png'),
}

export const CHALLENGE_CARD_COLOR: { [key: string]: string } = {
  '1': COLORS.secondary['100'],
  '2': COLORS.accent['100'],
  '3': COLORS.primary['100'],
}

export const DASHBOARD_HEADER_IMAGE_SOURCE: { [key: string]: string } = {
  calendar: require('../assets/icons/calendar.png'),
  header: require('../assets/images/dashboard-background.png'),
  overthinker: require('../assets/icons/overthinker-white.png'),
}

export const DASHBOARD_CARD_IMAGE_SOURCE: { [key: string]: string } = {
  marked: require('../assets/icons/marked-favourite.png'),
  overthinker: require('../assets/icons/overthinker-grey.png'),
  playButton: require('../assets/icons/audio.png'),
  tick: require('../assets/icons/complete.png'),
}
