import React, { ReactElement } from 'react';
import styles from 'styles/layout/News/NewsBlock.module.scss';
import { texts } from 'api/texts';

type Props = {
  link: string,
}

export const NewsBlock: React.FC<Props> = ({ link }):ReactElement => (
  <div className={styles.block}>
    <img
      alt='laptop'
      className={styles.image}
      src={link}
    />
    <p className={styles.description}>
      {texts.newsText}
    </p>
    <p className={styles.date}>01.09.2020</p>
  </div>
)