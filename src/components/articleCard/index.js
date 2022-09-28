import React from 'react';
import PropTypes from 'prop-types';

import { getPublishedAtTime } from '../../utils';

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
