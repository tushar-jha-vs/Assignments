import { COLORS } from "../theme"

export const CHALLENGE_IMAGE_SOURCE: { [key: string]: number } = {
    '1': require('../assets/icons/dActive.png'),
    '2': require('../assets/icons/reminder.png'),
    '3': require('../assets/icons/reflection.png'),
  }

export const CHALLENGE_CARD_COLOR: { [key: string]: number } = {
    '1': COLORS.secondary['100'],
    '2': COLORS.accent['100'],
    '3': COLORS.primary['100'],
  }