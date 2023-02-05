import React, { ReactElement } from 'react';
import Image from 'next/image';
import { texts } from 'api/texts';
import styles from 'styles/layout/News/NewsBlock.module.scss';

type NewsBlockProps = {
  link: string,
}

export const NewsBlock: React.FC<NewsBlockProps> = ({ link }):ReactElement => (
  <div className={styles.block}>
    <Image
      alt='laptop'
      className={styles.image}
      height={152}
      src={link}
      width={225}
    />
    <p className={styles.description}>
      {texts.newsText}
    </p>
    <p className={styles.date}>01.09.2020</p>
  </div>
);
