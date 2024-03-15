import {
  SECONDS_IN_DAY,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE,
  SECONDS_IN_MONTH,
  SECONDS_IN_WEEK,
  SECONDS_IN_YEAR,
} from '../constants'
export const getTime = (timestamp: number) => {
  const currentTime = new Date().getTime()
  const difference = currentTime - timestamp
  const secondsDifference = Math.floor(difference / 1000)
  let timeAgo = ''

  switch (true) {
    case secondsDifference < SECONDS_IN_MINUTE:
      timeAgo = `${secondsDifference}s`
      break
    case secondsDifference < SECONDS_IN_HOUR:
      timeAgo = `${Math.floor(secondsDifference / SECONDS_IN_MINUTE)}mn ago`
      break
    case secondsDifference < SECONDS_IN_DAY:
      timeAgo = `${Math.floor(secondsDifference / SECONDS_IN_HOUR)}hr ago`
      break
    case secondsDifference < SECONDS_IN_WEEK:
      timeAgo = `${Math.floor(secondsDifference / SECONDS_IN_DAY)}d ago`
      break
    case secondsDifference < SECONDS_IN_MONTH:
      timeAgo = `${Math.floor(secondsDifference / SECONDS_IN_WEEK)}w ago`
      break
    case secondsDifference < SECONDS_IN_YEAR:
      timeAgo = `${Math.floor(secondsDifference / SECONDS_IN_MONTH)}mo ago`
      break
    default:
      timeAgo = `${Math.floor(secondsDifference / SECONDS_IN_YEAR)}y ago`
      break
  }

  return timeAgo
}

export const getCurrentDate = () => {
  return new Date().getDate();
}
