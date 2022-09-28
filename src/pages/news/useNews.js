import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const dispatch = useDispatch();

  const category = params.get('category');
  const keywords = params.get('keywords');

  const [apiParams, setApiParams] = useState({});

  const newsLoading = useSelector((state) => state.newsSlice.loading);
  const newsError = useSelector((state) => state.newsSlice.error);
  const totalArticles = useSelector((state) => state.newsSlice.totalArticles);
  const isEnd = useSelector((state) => state.newsSlice.isEnd);

  const getTitle = () => {
    if (category) {
      const findItem = mockMenu.find((item) => item.url.includes(category));
      return findItem.name;
    }

    if (keywords) {
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
      if (category) {
        dispatch(getCategoryNewsAction(apiParams));
      } else if (keywords) {
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
