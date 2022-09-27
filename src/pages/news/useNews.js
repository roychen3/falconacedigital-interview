import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCategoryNewsAction,
  getSearchNewsAction,
  resetNewsAction,
  cleanTotalArticlesAction,
} from '../../redux/newsSlice';

import { useInfiniteScrolling } from '../../hook/useInfiniteScrolling';

import mockMenu from '../../mockData/menu.json';
import mockNews from '../../mockData/news.json';

const useNews = () => {
  const [params] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const category = params.get('category');
  const keywords = params.get('keywords');

  const [apiParams, setApiParams] = useState({});

  const newsLoading = useSelector((state) => state.newsSlice.loading);
  const newsError = useSelector((state) => state.newsSlice.error);
  const totalArticles = useSelector((state) => state.newsSlice.totalArticles);
  const isEnd = useSelector((state) => state.newsSlice.isEnd);

  const getTitle = () => {
    if (location.pathname === '/breaking_news') {
      const findItem = mockMenu.find((item) => item.url.includes(category));
      return findItem.name;
    }

    if (location.pathname === '/search') {
      return `Search: ${keywords}`;
    }

    return '';
  };

  const handleInfiniteScrollingTrigger = () => {
    if (isEnd === false && newsLoading === false && !newsError) {
      setApiParams((preValues) => ({
        ...preValues,
        page: preValues.page + 1,
      }));
    }
  };
  const lastElementRef = useInfiniteScrolling(handleInfiniteScrollingTrigger);

  useEffect(() => {
    setApiParams((preValues) => ({
      ...preValues,
      category,
      keywords,
      page: 1,
    }));
    dispatch(cleanTotalArticlesAction());
  }, [category, keywords]);

  useEffect(() => {
    if (Object.keys(apiParams).length > 0) {
      if (location.pathname === '/breaking_news') {
        dispatch(getCategoryNewsAction(apiParams));
      } else if (location.pathname === '/search') {
        dispatch(getSearchNewsAction(apiParams));
      }
    }
  }, [apiParams]);

  useEffect(() => {
    return () => {
      dispatch(resetNewsAction());
    };
  }, []);

  return {
    title: getTitle(),
    newsLoading,
    totalArticles,
    newsError,
    infiniteScrollingLastNewsRef: lastElementRef,
    mockMenu,
    mockNews,
  };
};

export default useNews;
