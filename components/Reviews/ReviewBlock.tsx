import React, { ReactElement } from 'react';
import styles from 'styles/layout/Reviews.module.scss';
import Link from 'next/link';
import { Review } from 'types/main/Review';

type Props = {
  review: Review
}

export const ReviewBlock: React.FC<Props> = ({ review }): ReactElement => {
  const {name, text } = review;

  return (
    <section className={styles.section} >
      <p className={styles.review} >{text}</p>
      <p className={styles.name} > {name}</p>
      <div className={styles.lowerPart}>
        <Link className={styles.reviewButton} href="/contactUs"> Leave Us A Review</Link>
      </div>
    </section>
  )
}
