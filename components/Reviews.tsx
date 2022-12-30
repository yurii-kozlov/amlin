import React, { ReactElement } from 'react';
import classes from 'styles/container.module.scss';
import styles from 'styles/Reviews.module.scss';
import { texts } from 'api/texts';
import Link from 'next/link';

export const Reviews: React.FC = (): ReactElement => (
  <div className={classes.container} >
    <section className={styles.section} >
      <p className={styles.review} >{texts.reviews}</p>
      <p className={styles.name} > - Tama Brown</p>
      <div className={styles.lowerPart}>
        <Link className={styles.reviewButton} href="#"> Leave Us A Review</Link>
        <div className={styles.subpages}>
          <Link className={styles.subpage} href="#" />
          <Link className={styles.subpage} href="#" />
          <Link className={styles.subpage} href="#" />
          <Link className={styles.subpage} href="#" />
        </div>
      </div>
    </section>
  </div>
);
