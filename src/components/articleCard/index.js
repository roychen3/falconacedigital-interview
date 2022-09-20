import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import {
  StyledArticleCard,
  Link,
  Image,
  InfoContainer,
  Title,
  Media,
  SourceLayout,
  Time,
} from './styled';

const ArticleCard = ({ data, forwardedRef }) => {
  const getPublishedAtTime = (dateStr) => {
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

  return (
    <StyledArticleCard ref={forwardedRef}>
      <Link href={data.url}>
        <div>
          <Image src={data.urlToImage} alt={data.title} />
        </div>
        <InfoContainer>
          <Title>{data.title}</Title>
          <SourceLayout>
            <Media>{data.source.name}</Media>
            <Time>{getPublishedAtTime(data.publishedAt)}</Time>
          </SourceLayout>
        </InfoContainer>
      </Link>
    </StyledArticleCard>
  );
};

ArticleCard.defaultProps = {
  forwardedRef: undefined,
};
ArticleCard.propTypes = {
  data: PropTypes.object.isRequired,
  forwardedRef: PropTypes.func,
};

export default ArticleCard;
