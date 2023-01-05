import React, { ReactElement } from 'react'
import styles from 'styles/Services.module.scss';
import { Container } from 'components/Container';

export const Services: React.FC = (): ReactElement => (
  <Container>
    <div className={styles.section} >

      <div className={styles.block}>
        <div className={styles.iconBlock}>
          <span className={`${styles.icon} ${styles.iconSupport}`}/>
        </div>
        <h3 className={styles.title}>Product support</h3>
        <p className={styles.description} >Up to 3 years on-site warranty available for your peace of mind.</p>
      </div>

      <div className={styles.block}>
        <div className={styles.iconBlock}>
          <span className={`${styles.icon} ${styles.iconAccount}`}/>
        </div>
        <h3 className={styles.title}>Personal Account</h3>
        <p className={styles.description} >With big discounts, free delivery and a dedicated support specialist. </p>
      </div>

      <div className={styles.block}>
        <div className={styles.iconBlock}>
          <span className={`${styles.icon} ${styles.iconSavings}`}/>
        </div>
        <h3 className={styles.title}>Amazing Savings</h3>
        <p className={styles.description} >Up to 70% off new Products, you can be sure of the best price.</p>
      </div>
    </div>
  </Container>
);
