import React, { ReactElement } from 'react';
import styles from 'styles/Logos.module.scss';
import { logosLinksImages } from 'api/logosLinksImages';
import { LogoBlock } from 'components/Logos/LogoBlock';
import { Container } from 'components/Container';

export const Logos: React.FC = (): ReactElement => (
  <Container>
    <div className={styles.section} >
      {logosLinksImages.map((image) => (
        <LogoBlock
          key={`logo-id-${image.id}`}
          logo={image}
          />
     ))}

    </div>
  </Container>
);
