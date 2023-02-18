import React, { ReactElement, useRef } from 'react';
import Slider from 'react-slick';
import { Review } from 'types/main/Review';
import { useOnScreen } from 'hooks/useOnScreen';
import { reviewsSettings } from 'constants/reviewsConstants';
import { ReviewBlock } from 'components/Reviews/ReviewBlock';
import { Container } from 'components/Container';

type ReviewsProps = {
  reviews: Review[]
}

export const Reviews: React.FC<ReviewsProps> = ({ reviews }): ReactElement => {

  const ref: any = useRef<HTMLDivElement>();
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '150px');

  return (
    <Container >
      <div ref={ref}>
        {onScreen && (
          <Slider {...reviewsSettings} >
            {reviews.map((reviewBlock) => (
              <ReviewBlock key={reviewBlock.slug} review={reviewBlock} />
                ))}
          </Slider>
        )}
      </div>
    </Container>
  );
}
