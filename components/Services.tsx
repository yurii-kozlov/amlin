import React, { ReactElement } from 'react'
import cn from 'classnames';
import { Container } from 'components/Container';
import styles from 'styles/layout/Services.module.scss';

export const Services: React.FC = (): ReactElement => (
  <section className={styles.backgroundColor} >
    <Container>
      <div className={styles.section}>
        <div className={styles.block}>
          <div className={styles.iconBlock}>
            <span className={cn(styles.icon, styles.iconSupport)}/>
          </div>
          <h1 className={styles.title}>Product support</h1>
          <p className={styles.description} >Up to 3 years on-site warranty available for your peace of mind.</p>
        </div>
        <div className={styles.block}>
          <div className={styles.iconBlock}>
            <span className={cn(styles.icon, styles.iconAccount)}/>
          </div>
          <h1 className={styles.title}>Personal Account</h1>
          <p className={styles.description} >With big discounts, free delivery and a dedicated support specialist. </p>
        </div>
        <div className={styles.block}>
          <div className={styles.iconBlock}>
            <span className={cn(styles.icon, styles.iconSavings)}/>
          </div>
          <h1 className={styles.title}>Amazing Savings</h1>
          <p className={styles.description} >Up to 70% off new Products, you can be sure of the best price.</p>
        </div>
      </div>
    </Container>
  </section>
);
