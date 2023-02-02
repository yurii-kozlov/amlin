import React, { ReactElement } from 'react';
import Slider from 'react-slick';
import { Review } from 'types/main/Review';
import { reviewsSettings } from 'constants/reviewsConstants';
import { ReviewBlock } from 'components/Reviews/ReviewBlock';
import { Container } from 'components/Container';

type ReviewsProps = {
  reviews: Review[]
}

export const Reviews: React.FC<ReviewsProps> = ({ reviews }): ReactElement => (
  <Container >
    <Slider {...reviewsSettings} >
      {reviews.map((reviewBlock) => (
        <ReviewBlock key={reviewBlock.slug} review={reviewBlock} />
    ))}
    </Slider>
  </Container>
);
