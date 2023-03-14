import React, { ReactElement } from 'react';
import Image from 'next/image';
import { Banner } from 'types/main/Banner';
import styles from 'styles/layout/Carousel/CarouselMainBlock.module.scss';

type Props = {
  banner: Banner
}

export const CarouselMainBlock: React.FC<Props> = ({ banner }): ReactElement => {
  const { url, id } = banner;

  return (
    <div className={styles.imageContainer} >
      <Image
        alt={`banner-${id}`}
        className={styles.image}
        height={328}
        sizes="(max-width: 768px) 100%,
        (max-width: 1200px) 100%"
        src={url}
        width={1398}
        priority
      />
    </div>
  )
};
