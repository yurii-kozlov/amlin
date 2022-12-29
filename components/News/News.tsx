import React, { ReactElement } from 'react';
import { NewsBlock } from 'components/News/NewsBlock';
import classes from 'styles/base/container.module.scss';
import styles from 'styles/layout/News/News.module.scss';
import { newsLinksImages } from 'api/newsLinksImages';

export const News: React.FC = (): ReactElement => (
  <section className={styles.section}>
    <div className={classes.container} >
      <h1 className={styles.title}>
        Follow us on Instagram for News, Offers & More
      </h1>
      <div className={styles.newsList}>
        {newsLinksImages.map((image) => (
          <NewsBlock key={`logo-id-${image.id}`} link={image.link} />
          ))}
      </div>
    </div>
  </section>
)