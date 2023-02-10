import React, { ReactElement, useRef } from 'react';
import { NewsBlock } from 'components/News/NewsBlock';
import styles from 'styles/layout/News/News.module.scss';
import { newsLinksImages } from 'api/newsLinksImages';
import { Container } from 'components/Container';
import { useOnScreen } from 'hooks/useOnScreen';

export const News: React.FC = (): ReactElement => {

  const ref: any = useRef<HTMLElement>();
  const onScreen: boolean = useOnScreen<HTMLElement>(ref, '150px');

  return (
    <section className={styles.section} ref={ref}>
      {onScreen && (
        <Container >
          <h1 className={styles.title}>
            Follow us on Instagram for News, Offers & More
          </h1>
          <div className={styles.newsList}>
            {newsLinksImages.map((image) => (
              <NewsBlock key={`logo-id-${image.id}`} link={image.link} />
                  ))}
          </div>
        </Container>
      )}
    </section>
  );

}
