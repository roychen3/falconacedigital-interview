import { render } from '@testing-library/react';
import * as reactRouterDom from 'react-router-dom';

import MobileMenu from './index';

const mockMenu = [
  {
    name: '熱門報導',
    url: 'news?category=hot',
  },
  {
    name: '全球',
    url: 'news?category=global',
  },
  {
    name: '娛樂',
    url: 'news?category=entertainment',
  },
];

reactRouterDom.useSearchParams = jest.fn();

test('Renders <MobileMenu />', () => {
  reactRouterDom.useSearchParams.mockImplementation(() => [
    { get: () => '' },
  ]);
  const { BrowserRouter } = reactRouterDom;
  const { queryAllByTestId } = render(
    <BrowserRouter>
      <MobileMenu data={mockMenu} />
    </BrowserRouter>
  );

  expect(queryAllByTestId('menuItem')[0]).toHaveTextContent(mockMenu[0].name);
  expect(queryAllByTestId('menuItem')[0].getAttribute('href')).toEqual(
    '/' + mockMenu[0].url
  );
  expect(queryAllByTestId('menuItem')[1]).toHaveTextContent(mockMenu[1].name);
  expect(queryAllByTestId('menuItem')[1].getAttribute('href')).toEqual(
    '/' + mockMenu[1].url
  );
  expect(queryAllByTestId('menuItem')[2]).toHaveTextContent(mockMenu[2].name);
  expect(queryAllByTestId('menuItem')[2].getAttribute('href')).toEqual(
    '/' + mockMenu[2].url
  );
});

test('Renders <MobileMenu /> with category=hot', () => {
  reactRouterDom.useSearchParams.mockImplementation(() => [
    { get: () => 'hot' },
  ]);
  const { BrowserRouter } = reactRouterDom;
  const { queryAllByTestId } = render(
    <BrowserRouter>
      <MobileMenu data={mockMenu} />
    </BrowserRouter>
  );

  expect(queryAllByTestId('menuItem')[0]).toHaveStyle('color: #3478BC');
  expect(queryAllByTestId('menuItem')[1]).toHaveStyle('color: black;');
  expect(queryAllByTestId('menuItem')[2]).toHaveStyle('color: black;');
});

test('Renders <MobileMenu /> with category=global', () => {
  reactRouterDom.useSearchParams.mockImplementation(() => [
    { get: () => 'global' },
  ]);
  const { BrowserRouter } = reactRouterDom;
  const { queryAllByTestId } = render(
    <BrowserRouter>
      <MobileMenu data={mockMenu} />
    </BrowserRouter>
  );

  expect(queryAllByTestId('menuItem')[0]).toHaveStyle('color: black;');
  expect(queryAllByTestId('menuItem')[1]).toHaveStyle('color: #3478BC');
  expect(queryAllByTestId('menuItem')[2]).toHaveStyle('color: black;');
});

test('Renders <MobileMenu /> with category=entertainment', () => {
  reactRouterDom.useSearchParams.mockImplementation(() => [
    { get: () => 'entertainment' },
  ]);
  const { BrowserRouter } = reactRouterDom;
  const { queryAllByTestId } = render(
    <BrowserRouter>
      <MobileMenu data={mockMenu} />
    </BrowserRouter>
  );

  expect(queryAllByTestId('menuItem')[0]).toHaveStyle('color: black;');
  expect(queryAllByTestId('menuItem')[1]).toHaveStyle('color: black;');
  expect(queryAllByTestId('menuItem')[2]).toHaveStyle('color: #3478BC');
});
