import React, { ReactElement } from 'react';
import classes from 'styles/base/container.module.scss';
import { Review } from 'types/main/Review';
import { ReviewBlock } from 'components/Reviews/ReviewBlock';
import Slider from 'react-slick';
import styles from 'styles/layout/Reviews.module.scss';
import Link from 'next/link';


type Props = {
  reviews: Review[]
}

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: 'dotsBlock',
  appendDots: (dots: any): ReactElement => (
    <div
      className={styles.subpages}
    >
      <ul className={styles.list} style={{ margin: '0px' }}> {dots} </ul>
    </div>
  ),
  customPaging: (i: number): ReactElement =>  (
    <Link className={`${styles.subpage}`} href={`/slider-${i}`} />
  )
};

export const Reviews: React.FC<Props> = ({ reviews }): ReactElement => (
  <div className={classes.container} >
    <Slider {...settings} >
      {reviews.map((reviewBlock) => (
        <ReviewBlock key={reviewBlock.slug} review={reviewBlock} />
    ))}
    </Slider>
  </div>
)