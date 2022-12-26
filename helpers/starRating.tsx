import React, { ReactNode } from 'react';
import styles from 'styles/layout/StarRating.module.scss';

export const starRating = (input: number): ReactNode => {
  switch (input) {
    case 1:
      return (
        <div className={styles.stars}>
          <span className={`${styles.star} ${styles.starActive}`}/>
          <span className={`${styles.star} ${styles.starEmpty}`}/>
          <span className={`${styles.star} ${styles.starEmpty}`} />
          <span className={`${styles.star} ${styles.starEmpty}`} />
          <span className={`${styles.star} ${styles.starEmpty}`} />
        </div>
      )

    case 2:
      return (
        <div className={styles.stars}>
          <span className={`${styles.star} ${styles.starActive}`}/>
          <span className={`${styles.star} ${styles.starActive}`}/>
          <span className={`${styles.star} ${styles.starEmpty}`} />
          <span className={`${styles.star} ${styles.starEmpty}`} />
          <span className={`${styles.star} ${styles.starEmpty}`} />
        </div>
      )

      case 3:
        return (
          <div className={styles.stars}>
            <span className={`${styles.star} ${styles.starActive}`}/>
            <span className={`${styles.star} ${styles.starActive}`}/>
            <span className={`${styles.star} ${styles.starActive}`}/>
            <span className={`${styles.star} ${styles.starEmpty}`} />
            <span className={`${styles.star} ${styles.starEmpty}`} />
          </div>
        )

        case 4:
          return (
            <div className={styles.stars}>
              <span className={`${styles.star} ${styles.starActive}`}/>
              <span className={`${styles.star} ${styles.starActive}`}/>
              <span className={`${styles.star} ${styles.starActive}`}/>
              <span className={`${styles.star} ${styles.starActive}`}/>
              <span className={`${styles.star} ${styles.starEmpty}`} />
            </div>
          )

    default:
      return (
        <div className={styles.stars}>
          <span className={`${styles.star} ${styles.starActive}`}/>
          <span className={`${styles.star} ${styles.starActive}`}/>
          <span className={`${styles.star} ${styles.starActive}`} />
          <span className={`${styles.star} ${styles.starActive}`} />
          <span className={`${styles.star} ${styles.starActive}`} />
        </div>
      )
  }
}
