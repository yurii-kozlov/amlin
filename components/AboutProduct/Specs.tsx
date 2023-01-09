import React, { ReactElement } from 'react';
import styles from 'styles/layout/AboutProduct/Specs.module.scss';

export const Specs: React.FC = (): ReactElement => (
  <ul className={styles.list}>
    <li className={styles.listItem}>
      <span className={styles.listItemFeature}>CPU</span>
      <span className={styles.availability}>N/A</span>
    </li>
    <li className={styles.listItem}>
      <span className={styles.listItemFeature}>Featured</span>
      <span className={styles.availability}>N/A</span>
    </li>
    <li className={styles.listItem}>
      <span className={styles.listItemFeature}>I/O Ports</span>
      <span className={styles.availability}>N/A</span>
    </li>
  </ul>
);
