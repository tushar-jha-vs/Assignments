import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)
export const getTime = (timestamp: number) => {
  const timeAgo = new TimeAgo('en-US')
  return timeAgo.format(timestamp)
}
