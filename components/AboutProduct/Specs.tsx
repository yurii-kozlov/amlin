import React, { ReactElement } from 'react';
import styles from 'styles/layout/AboutProduct/Specs.module.scss';

export const Specs: React.FC = (): ReactElement => (
  <ul className={styles.specsList}>
    <li className={styles.specsListItem}>
      <span className={styles.specsListItemFeature}>CPU</span>
      <span className={styles.specsAvailability}>N/A</span>
    </li>
    <li className={styles.specsListItem}>
      <span className={styles.specsListItemFeature}>Featured</span>
      <span className={styles.specsAvailability}>N/A</span>
    </li>
    <li className={styles.specsListItem}>
      <span className={styles.specsListItemFeature}>I/O Ports</span>
      <span className={styles.specsAvailability}>N/A</span>
    </li>
  </ul>
);
