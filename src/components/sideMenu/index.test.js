import { render } from '@testing-library/react';
import * as reactRouterDom from 'react-router-dom';

import SideMenu from './index';

const mockMenu = [
  {
    name: '熱門報導',
    url: 'breaking_news?category=hot',
  },
  {
    name: '全球',
    url: 'breaking_news?category=global',
  },
  {
    name: '娛樂',
    url: 'breaking_news?category=entertainment',
  },
];

reactRouterDom.useSearchParams = jest.fn();

test('Renders <SideMenu />', () => {
  reactRouterDom.useSearchParams.mockImplementation(() => [
    { get: () => '' },
  ]);
  const { BrowserRouter } = reactRouterDom;
  const { queryAllByTestId } = render(
    <BrowserRouter>
      <SideMenu data={mockMenu} />
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

test('Renders <SideMenu /> with category=hot', () => {
  reactRouterDom.useSearchParams.mockImplementation(() => [
    { get: () => 'hot' },
  ]);
  const { BrowserRouter } = reactRouterDom;
  const { queryAllByTestId } = render(
    <BrowserRouter>
      <SideMenu data={mockMenu} />
    </BrowserRouter>
  );

  expect(queryAllByTestId('itemLayout')[0]).toHaveStyle('color: #fff');
  expect(queryAllByTestId('itemLayout')[0]).toHaveStyle('background-color: #3478BC');
  expect(queryAllByTestId('itemLayout')[0]).toHaveStyle('border-radius: 9999px;');
});

test('Renders <SideMenu /> with category=global', () => {
  reactRouterDom.useSearchParams.mockImplementation(() => [
    { get: () => 'global' },
  ]);
  const { BrowserRouter } = reactRouterDom;
  const { queryAllByTestId } = render(
    <BrowserRouter>
      <SideMenu data={mockMenu} />
    </BrowserRouter>
  );

  expect(queryAllByTestId('itemLayout')[1]).toHaveStyle('color: #fff');
  expect(queryAllByTestId('itemLayout')[1]).toHaveStyle('background-color: #3478BC');
  expect(queryAllByTestId('itemLayout')[1]).toHaveStyle('border-radius: 9999px;');
});

test('Renders <SideMenu /> with category=entertainment', () => {
  reactRouterDom.useSearchParams.mockImplementation(() => [
    { get: () => 'entertainment' },
  ]);
  const { BrowserRouter } = reactRouterDom;
  const { queryAllByTestId } = render(
    <BrowserRouter>
      <SideMenu data={mockMenu} />
    </BrowserRouter>
  );

  expect(queryAllByTestId('itemLayout')[2]).toHaveStyle('color: #fff');
  expect(queryAllByTestId('itemLayout')[2]).toHaveStyle('background-color: #3478BC');
  expect(queryAllByTestId('itemLayout')[2]).toHaveStyle('border-radius: 9999px;');
});
