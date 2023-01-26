import React, { ReactElement }from 'react';
import { Container } from 'components/Container';
import styles from 'styles/layout/Loader.module.scss';

export const Loader = (): ReactElement => (
  <Container>
    <div className={styles.loader} />
  </Container>
  );
