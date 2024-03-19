import { COLORS } from '../theme'

export const CHALLENGE_IMAGE_SOURCE: { [key: string]: number } = {
  bookmark: require('../assets/icons/marked-favourite.png'),
  completedTick: require('../assets/icons/complete.png'),
  playButton: require('../assets/icons/audio.png'),
  removeBookmark: require('../assets/icons/not-marked-favourite.png'),
}

export const CHALLENGE_CARD_COLOR: { [key: string]: string } = {
  'D-active': COLORS.secondary['100'],
  'Reminder': COLORS.accent['100'],
  'Reflection': COLORS.primary['100'],
}

export const DASHBOARD_HEADER_IMAGE_SOURCE: { [key: string]: number } = {
  calendar: require('../assets/icons/calendar.png'),
  header: require('../assets/images/dashboard-background.png'),
  overthinker: require('../assets/icons/overthinker-white.png'),
}

export const DASHBOARD_CARD_IMAGE_SOURCE: { [key: string]: number } = {
  marked: require('../assets/icons/marked-favourite.png'),
  overthinker: require('../assets/icons/overthinker-grey.png'),
  playButton: require('../assets/icons/audio.png'),
  tick: require('../assets/icons/complete.png'),
}

export const WEBVIEW_DASHBOARD_CARD_URI = 'https://youtu.be/0EvRSD1-jII'
