import dayjs from 'dayjs';
import { getPublishedAtTime } from './index';

test('getPublishedAtTime', () => {
  const now = dayjs();
  expect(getPublishedAtTime(now.subtract(1, 'hour'))).toEqual('1小時');
  expect(getPublishedAtTime(now.subtract(2, 'hour'))).toEqual('2小時');
  expect(getPublishedAtTime(now.subtract(23, 'hour'))).toEqual('23小時');
  expect(getPublishedAtTime(now.subtract(24, 'hour'))).toEqual('1天');
  expect(getPublishedAtTime(now.subtract(1, 'day'))).toEqual('1天');
  expect(getPublishedAtTime(now.subtract(2, 'day'))).toEqual('2天');
  expect(getPublishedAtTime(now.subtract(6, 'day'))).toEqual('6天');
  expect(getPublishedAtTime(now.subtract(7, 'day'))).toEqual('7天');
  expect(getPublishedAtTime(now.subtract(8, 'day'))).toEqual(now.subtract(8, 'day').format('YYYY-MM-DD'));
  expect(getPublishedAtTime(now.subtract(1, 'month'))).toEqual(now.subtract(1, 'month').format('YYYY-MM-DD'));
  expect(getPublishedAtTime(now.subtract(1, 'year'))).toEqual(now.subtract(1, 'year').format('YYYY-MM-DD'));
});
