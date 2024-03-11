export function getTimeString(timestamp: number): string {
  const now = new Date().getTime();
  const difference = now - timestamp;

  const secondsDifference = Math.floor(difference / 1000);

  if (secondsDifference < 60) {
    return `${secondsDifference}s`;
  } else if (secondsDifference < 3600) {
    return `${Math.floor(secondsDifference / 60)} min`;
  } else if (secondsDifference < 86400) {
    return `${Math.floor(secondsDifference / 3600)} hr`;
  } else if (secondsDifference < 604800) {
    return `${Math.floor(secondsDifference / 86400)} day`;
  } else if (secondsDifference < 2592000) {
    return `${Math.floor(secondsDifference / 604800)} week`;
  } else if (secondsDifference < 31536000) {
    return `${Math.floor(secondsDifference / 2592000)} month`;
  } else {
    return `${Math.floor(secondsDifference / 31536000)} year`;
  }
}
