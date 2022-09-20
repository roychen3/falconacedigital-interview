import React, { useState, useEffect, forwardRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCategoryNewsAction,
  getSearchNewsAction,
  resetNewsAction,
  cleanTotalArticlesAction,
} from '../../redux/newsSlice';

import { useInfiniteScrolling } from '../../hook/useInfiniteScrolling';

import ErrorAlert from '../../components/errorAlert';
import Spinner from '../../components/spinner';
import ArticleCard from '../../components/articleCard';

import {
  ArticleContainer,
  ArticleTitle,
  ArticleCardLayout,
  SpinnerLayout,
} from './styled';

import mockMenu from '../../mockData/menu.json';
import mockNews from '../../mockData/news.json';

const WrappedArticleCard = forwardRef((props, ref) => (
  <ArticleCard {...props} forwardedRef={ref} />
));
WrappedArticleCard.displayName = 'ArticleCard';

const News = () => {
  const [params] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const category = params.get('category');
  const keywords = params.get('keywords');

  const [apiParams, setApiParams] = useState({});
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);

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

  const handleErrorAlertClose = () => {
    setErrorAlertOpen(false);
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
    if (newsError) {
      setErrorAlertOpen(true);
    } else {
      setErrorAlertOpen(false);
    }
  }, [newsError]);

  useEffect(() => {
    return () => {
      dispatch(resetNewsAction());
    };
  }, []);

  return (
    <ArticleContainer>
      <ArticleTitle>{getTitle()}</ArticleTitle>

      <ArticleCardLayout>
        {totalArticles.length === 0 && newsError && (
          <>
            {mockNews.articles.map((item, itemIdx) => (
              <ArticleCard key={itemIdx} data={item} />
            ))}
          </>
        )}

        {totalArticles.map((item, itemIdx) =>
          itemIdx + 1 === totalArticles.length ? (
            <WrappedArticleCard
              key={itemIdx}
              data={item}
              ref={lastElementRef}
            />
          ) : (
            <ArticleCard key={itemIdx} data={item} />
          )
        )}
      </ArticleCardLayout>

      {newsLoading && (
        <SpinnerLayout>
          <Spinner />
        </SpinnerLayout>
      )}

      <ErrorAlert open={errorAlertOpen} onClose={handleErrorAlertClose}>
        <p>
          系統發生錯誤!
          {totalArticles.length === 0 && ' 將使用假資料示意'}
        </p>
      </ErrorAlert>
    </ArticleContainer>
  );
};

News.propTypes = {};

export default News;
