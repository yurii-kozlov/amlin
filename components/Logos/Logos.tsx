import React, { ReactElement } from 'react';
import classes from 'styles/container.module.scss';
import styles from 'styles/Logos.module.scss';
import { logosLinksImages } from 'api/logosLinksImages';
import { LogoBlock } from 'components/Logos/LogoBlock';

export const Logos: React.FC = (): ReactElement => (
  <section className={classes.container} >
    <div className={styles.section} >
      {logosLinksImages.map((image) => (
        <LogoBlock
          key={`logo-id-${image.id}`}
          logo={image}
          />
     ))}

    </div>
  </section>
);
