import Link from 'next/link';
import React, { ReactElement } from 'react';
import styles from 'styles/layout/BonusSection.module.scss';
import classes from 'styles/base/container.module.scss';
import Image from 'next/image';
import zipLogo from 'images/icons/zipLogo.svg';

export const BonusSection: React.FC = (): ReactElement => (
  <div className={classes.container} >
    <section className={styles.section} >
      <Image
        alt='zip-logo'
        className={styles.logo}
        src={zipLogo}
      />
      <p className={styles.description}><strong>own</strong> it now, up to 6 months interest free
      </p>
      <Link className={styles.moreInfoLink} href="#">learn more</Link>
    </section>
  </div>
);
