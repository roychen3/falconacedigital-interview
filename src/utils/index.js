import dayjs from 'dayjs';

export const getPublishedAtTime = (dateStr) => {
  const publishedAtDate = dayjs(dateStr);
  const now = dayjs();
  const diffHour = now.diff(publishedAtDate, 'hour');

  if (diffHour < 24) {
    return `${diffHour}小時`;
  } else if (diffHour <= 24 * 7) {
    return `${Math.floor(diffHour / 24)}天`;
  } else {
    return publishedAtDate.format('YYYY-MM-DD');
  }
};
