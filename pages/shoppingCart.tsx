import React, { ReactElement } from 'react';
import { MainContainer } from 'components/MainContainer';
import styles from 'styles/layout/shoppingCart.module.scss';

const ShoppingCart: React.FC = (): ReactElement => (
  <MainContainer>
    <section className={styles.section} >
      <h1>Hi, you have reached the ShoppingCart page</h1>
    </section>
  </MainContainer>
);

export default ShoppingCart;
