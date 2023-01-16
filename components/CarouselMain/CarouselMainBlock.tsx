import React, { ReactElement } from 'react';
import styles from 'styles/layout/Carousel/CarouselMainBlock.module.scss';
import { Banner } from 'types/main/Banner';

type Props = {
  banner: Banner
}

export const CarouselMainBlock: React.FC<Props> = ({ banner }): ReactElement => {
  const { url, id } = banner;

  return  (
    <div className={styles.imageContainer} >
      <img alt={`banner-${id}`} className={styles.image} src={url}/>
    </div>
  )
};
