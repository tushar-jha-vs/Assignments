export const getTimeString = (timestamp: number): string => {
  const now = new Date().getTime();
  const difference = now - timestamp;

  const secondsDifference = Math.floor(difference / 1000);
  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = 3600;
  const SECONDS_IN_DAY = 86400;
  const SECONDS_IN_WEEK = 604800;
  const SECONDS_IN_MONTH = 2592000;
  const SECONDS_IN_YEAR = 31536000;

  let timeAgo = '';

  if (secondsDifference < SECONDS_IN_MINUTE) {
    timeAgo = `${secondsDifference}s`;
  } else if (secondsDifference < SECONDS_IN_HOUR) {
    timeAgo = `${Math.floor(secondsDifference / 60)}mn ago`;
  } else if (secondsDifference < SECONDS_IN_DAY) {
    timeAgo = `${Math.floor(secondsDifference / 3600)}hr ago`;
  } else if (secondsDifference < SECONDS_IN_WEEK) {
    timeAgo = `${Math.floor(secondsDifference / 86400)}d ago`;
  } else if (secondsDifference < SECONDS_IN_MONTH) {
    timeAgo = `${Math.floor(secondsDifference / 604800)}w ago`;
  } else if (secondsDifference < SECONDS_IN_YEAR) {
    timeAgo = `${Math.floor(secondsDifference / 2592000)}mo ago`;
  } else {
    timeAgo = `${Math.floor(secondsDifference / 31536000)}y ago`;
  }
  return timeAgo;
};
