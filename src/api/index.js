import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getTopHeadlinesNewsApi = ({ category, page, country }) => {
  const urlParams = [];

  if (category === 'hot') {
    urlParams.push('sortBy=popularity');
  } else if (category && category !== 'global') {
    urlParams.push(`category=${category}`);
  }

  if (typeof page === 'number' && page >= 1) {
    urlParams.push(`page=${page}`);
  }

  if (category !== 'global') {
    if (country) {
      urlParams.push(`country=${country}`);
    } else {
      urlParams.push('country=tw');
    }
  }

  urlParams.push(`apiKey=${API_KEY}`);
  const urlParamsStr = urlParams.join('&');

  return axios
    .get(`https://newsapi.org/v2/top-headlines?${urlParamsStr}`)
    .catch((error) => error);
};

export const getEverythingNewsApi = ({ keywords, page }) => {
  const urlParams = [];

  if (keywords) {
    urlParams.push(`q=${keywords}`);
  } else {
    urlParams.push('q=global');
  }

  if (typeof page === 'number' && page >= 1) {
    urlParams.push(`page=${page}`);
  }

  urlParams.push('sortBy=popularity');
  urlParams.push(`apiKey=${API_KEY}`);
  const urlParamsStr = urlParams.join('&');

  return axios
    .get(`https://newsapi.org/v2/everything?${urlParamsStr}`)
    .catch((error) => error);
};
