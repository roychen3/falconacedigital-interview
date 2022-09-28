import { render } from '@testing-library/react';

import News from './index';
import useNews from './useNews';

const mockNews = {
  status: 'ok',
  totalResults: 9,
  articles: [
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Devin Coldewey',
      title:
        "Kalogon's smart cushion for wheelchairs keeps the pressure off and brings in $3.3M",
      description:
        'Kalogon believes it can mitigate this common but potentially lifethreatening condition with a smart cushion that prevents any one part of the body from...',
      url: 'https://techcrunch.com/2022/09/22/kalogonssmartcushion-for-wheelchairs-keeps-the-pressure-off-and-brings-in-3-3m/',
      urlToImage:
        'https://s.yimg.com/ny/api/res/1.2/ESrqIvLCZiHRXR6zWtFdEg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/techcrunch_350/4e6c942031d774125d56decae0581556',
      publishedAt: '2022-09-22T13:02:32Z',
      content:
        'Anyone who has to use a wheelchair regularly runs the risk of incurring injury from poor circulation. Kalogon believes it can mitigate this common but potentially life-threatening condition with a sm… [+5886 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Christine Hall',
      title:
        'Keith Rabois’ OpenStore bags new funding as valuation soars to $970M',
      description:
        'Many of the e-commerce roll-up companies, also known as aggregators, slowed down this year after a record 2021.  One of these is OpenStore, a company founded...',
      url: 'https://techcrunch.com/2022/09/22/keith-rabois-openstore-valuation-970m/',
      urlToImage:
        'https://s.yimg.com/ny/api/res/1.2/Srd2C0twB0SvTsAHSMfwHQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NjI-/https://media.zenfs.com/en/techcrunch_350/60ccc9aafe675a858b2fa20fb79fd9ef',
      publishedAt: '2022-09-22T13:01:45Z',
      content:
        'Many of the e-commerce roll-up companies, also known as aggregators, slowed down this year after a record 2021. However, some younger companies in this space are still thriving.\r\nOne of these is Open… [+6084 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Ivan Mehta',
      title: "Google's new Chromecast costs $30 — and it has a remote",
      description:
        'Google announced a new Chromecast with HD streaming support today that costs just $30 and has a remote control with it.  The company is launching the...',
      url: 'https://techcrunch.com/2022/09/22/googles-new-chromecast-costs-30-and-it-has-a-remote/',
      urlToImage:
        'https://s.yimg.com/ny/api/res/1.2/LXD3J6JI4Tf..go7JGZlMA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/techcrunch_350/ebc652c442ee2b604b0ae94632d180d1',
      publishedAt: '2022-09-22T13:00:49Z',
      content:
        "Google announced a new Chromecast with HD streaming support today that costs just $30 and has a remote control with it. The company is launching the Chromecast with Google TV (HD) yes, that's the off… [+2448 chars]",
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Brian Heater',
      title:
        'AirPods Pro (2nd Gen) review: Welcome updates to Apple’s best buds',
      description:
        'Market share analyses aren’t an exact science, exactly. Different firms take different factors into account, though more often than not, the numbers more or less line up among the bigger players. We discussed these figures in our recent review of the Apple Wa…',
      url: 'https://techcrunch.com/2022/09/22/airpods-pro-2nd-gen-review-welcome-updates-to-apples-best-buds/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2022/09/CMC_3690.jpg?resize=1200,800',
      publishedAt: '2022-09-22T13:00:24Z',
      content:
        'Market share analyses arent an exact science, exactly. Different firms take different factors into account, though more often than not, the numbers more or less line up among the bigger players. We d… [+12753 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Mike Butcher',
      title:
        'Web3 bug-bounty platform Immunefi raises $24M for its Series A funding round',
      description:
        'Web3 Bug-bounty statrup Immunefi raises $24 million as part of its Series A. The round was led by Framework Ventures.',
      url: 'https://techcrunch.com/2022/09/22/web3-bug-bounty-platform-immunefi-raises-24m-for-its-series-a-funding-round/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2019/07/GettyImages-493838534-e1562786516751.jpg',
      publishedAt: '2022-09-22T12:46:20Z',
      content:
        'It was around this time last year that we reported on Immunefi – one of the emerging bug bounty and security services platforms for DeFi – had raised $5.5 million in funding. Given that almost $2 bil… [+2461 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Natasha Lomas',
      title:
        'Limbo is tackling obesity with a pair of wearables and decades of physiology',
      description:
        "Limbo's subscription weight loss plan uses a biosensing CGM wearable to nudge users towards a keto diet to tackle the obesity crisis.",
      url: 'https://techcrunch.com/2022/09/22/limbo-seed/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2022/09/DHen2Lfs.jpeg?resize=1200,670',
      publishedAt: '2022-09-22T12:26:26Z',
      content:
        'In recent years there has been a flurry of startup activity aimed at commercializing blood glucose biosensors — aka, wearable tech that was originally developed for diabetes management. These continu… [+19170 chars]',
    },
  ],
};

jest.mock('./useNews');

test('Renders <News /> with first news loading', () => {
  useNews.mockImplementation(() => ({
    title: '商業',
    newsLoading: true,
    totalArticles: [],
    newsError: '',
    infiniteScrollingLastNewsRef: undefined,
    mockNews,
  }));

  const { queryByTestId } = render(<News />);

  expect(queryByTestId('title')).toHaveTextContent('商業');
  expect(queryByTestId('articleCardList').childNodes.length).toEqual(0);
  expect(queryByTestId('spinner')).toBeTruthy();
  expect(queryByTestId('errorMessage')).toBeFalsy();
});

test('Renders <News /> with api error & use mock news', () => {
  useNews.mockImplementation(() => ({
    title: '熱門報導',
    newsLoading: false,
    totalArticles: [],
    newsError: 'mock api error',
    infiniteScrollingLastNewsRef: undefined,
    mockNews,
  }));

  const { queryByTestId } = render(<News />);

  expect(queryByTestId('title')).toHaveTextContent('熱門報導');
  expect(queryByTestId('articleCardList').childNodes.length).toEqual(
    mockNews.articles.length
  );
  expect(queryByTestId('spinner')).toBeFalsy();
  expect(queryByTestId('errorMessage')).toHaveTextContent(
    '系統發生錯誤! 將使用假資料示意'
  );
});

test('Renders <News /> with totalArticles have data & api error', () => {
  useNews.mockImplementation(() => ({
    title: '全球',
    newsLoading: false,
    totalArticles: [...mockNews.articles],
    newsError: 'mock api error',
    infiniteScrollingLastNewsRef: undefined,
    mockNews,
  }));

  const { queryByTestId } = render(<News />);

  expect(queryByTestId('title')).toHaveTextContent('全球');
  expect(queryByTestId('articleCardList').childNodes.length).toEqual(
    mockNews.articles.length
  );
  expect(queryByTestId('spinner')).toBeFalsy();
  expect(queryByTestId('errorMessage')).toHaveTextContent('系統發生錯誤!');
});

test('Renders <News /> with totalArticles have data &  news loading', () => {
  useNews.mockImplementation(() => ({
    title: '娛樂',
    newsLoading: true,
    totalArticles: [...mockNews.articles],
    newsError: '',
    infiniteScrollingLastNewsRef: undefined,
    mockNews,
  }));

  const { queryByTestId } = render(<News />);

  expect(queryByTestId('title')).toHaveTextContent('娛樂');
  expect(queryByTestId('articleCardList').childNodes.length).toEqual(
    mockNews.articles.length
  );
  expect(queryByTestId('spinner')).toBeTruthy();
  expect(queryByTestId('errorMessage')).toBeFalsy();
});
