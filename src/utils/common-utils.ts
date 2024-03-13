import { SECONDS_IN_MINUTE } from '../constants'

export const getTime = (timestamp: number) => {
  const currentTime = new Date().getTime()
  const difference = currentTime - timestamp
  const secondsDifference = Math.floor(difference / 1000)
  let timeAgo = ''

  if (secondsDifference < SECONDS_IN_MINUTE) {
    timeAgo = `${secondsDifference}s`
  } else if (secondsDifference < SECONDS_IN_MINUTE * 60) {
    timeAgo = `${Math.floor(secondsDifference / SECONDS_IN_MINUTE)}mn ago`
  } else if (secondsDifference < SECONDS_IN_MINUTE * 60 * 24) {
    timeAgo = `${Math.floor(secondsDifference / (SECONDS_IN_MINUTE * 60))}hr ago`
  } else if (secondsDifference < SECONDS_IN_MINUTE * 60 * 24 * 7) {
    timeAgo = `${Math.floor(secondsDifference / (SECONDS_IN_MINUTE * 60 * 24))}d ago`
  } else if (secondsDifference < SECONDS_IN_MINUTE * 60 * 24 * 7 * 4) {
    timeAgo = `${Math.floor(secondsDifference / (SECONDS_IN_MINUTE * 60 * 24 * 7))}w ago`
  } else if (secondsDifference < SECONDS_IN_MINUTE * 60 * 24 * 7 * 4 * 12) {
    timeAgo = `${Math.floor(secondsDifference / (SECONDS_IN_MINUTE * 60 * 24 * 7 * 4))}mo ago`
  } else {
    timeAgo = `${Math.floor(secondsDifference / (SECONDS_IN_MINUTE * 60 * 24 * 7 * 4 * 12))}y ago`
  }
  return timeAgo
}
