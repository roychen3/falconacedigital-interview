import React, { useState, useEffect, forwardRef } from 'react';

import ErrorAlert from '../../components/errorAlert';
import Spinner from '../../components/spinner';
import ArticleCard from '../../components/articleCard';

import {
  ArticleContainer,
  ArticleTitle,
  ArticleCardLayout,
  SpinnerLayout,
} from './styled';

import useNews from './useNews';

const WrappedArticleCard = forwardRef((props, ref) => (
  <ArticleCard {...props} forwardedRef={ref} />
));
WrappedArticleCard.displayName = 'ArticleCard';

const News = () => {
  const {
    title,
    newsLoading,
    totalArticles,
    newsError,
    infiniteScrollingLastNewsRef,
    mockNews,
  } = useNews();

  const [errorAlertOpen, setErrorAlertOpen] = useState(false);

  const handleErrorAlertClose = () => {
    setErrorAlertOpen(false);
  };

  useEffect(() => {
    if (newsError) {
      setErrorAlertOpen(true);
    } else {
      setErrorAlertOpen(false);
    }
  }, [newsError]);

  return (
    <ArticleContainer>
      <ArticleTitle data-testid='title'>{title}</ArticleTitle>

      <ArticleCardLayout data-testid='articleCardList'>
        {totalArticles.map((item, itemIdx) =>
          itemIdx + 1 === totalArticles.length ? (
            <WrappedArticleCard
              key={itemIdx}
              data={item}
              ref={infiniteScrollingLastNewsRef}
            />
          ) : (
            <ArticleCard key={itemIdx} data={item} />
          )
        )}

        {totalArticles.length === 0 && newsError && (
          <>
            {mockNews.articles.map((item, itemIdx) => (
              <ArticleCard key={itemIdx} data={item} />
            ))}
          </>
        )}
      </ArticleCardLayout>

      {newsLoading && (
        <SpinnerLayout data-testid='spinner'>
          <Spinner />
        </SpinnerLayout>
      )}

      <ErrorAlert open={errorAlertOpen} onClose={handleErrorAlertClose}>
        <p data-testid='errorMessage'>
          系統發生錯誤!
          {totalArticles.length === 0 && ' 將使用假資料示意'}
        </p>
      </ErrorAlert>
    </ArticleContainer>
  );
};

News.propTypes = {};

export default News;
