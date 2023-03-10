import React, { ReactElement } from 'react';
import Link from 'next/link';
import styles from 'styles/layout/Reviews/ReviewsDots.module.scss';

export const reviewsSettings = {
  arrows: false,
  dots: true,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 10000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: 'dotsBlock',
  responsive: [
    {
      breakpoint: 281,
      settings: {
        dots: false
      }
    }
  ],
  appendDots: (dots: any): ReactElement => (
    <div className={styles.dots}>
      <ul className={styles.dotsList}> {dots} </ul>
    </div>
  ),
  customPaging: (i: number): ReactElement => (
    <Link aria-label={`review${i}`} className={styles.dot} href={`/slider-${i}`} />
  )
};
