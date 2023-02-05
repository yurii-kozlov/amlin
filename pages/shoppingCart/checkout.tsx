import React, { ReactElement } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { MainContainer } from 'components/MainContainer';
import { Container } from 'components/Container';
import { ShippingAddress } from 'components/Checkout/ShippingAddress';
import { OrderSummary } from 'components/Checkout/OrderSummary';
import { OrderStage } from 'components/Checkout/OrderStage';
import styles from 'styles/pages/checkout.module.scss';

const Checkout: React.FC = (): ReactElement => (
  <MainContainer pageDescription='checkout' title='Checkout'>
    <section className={cn(styles.section, styles.pageSection)}>
      <Container>
        <nav className={styles.navigation} >
          <Link className={styles.navigationLink} href="/">Home</Link>
          <Link className={styles.navigationLink} href="/shoppingCart">ShoppingCart</Link>
          <Link className={styles.navigationLink} href="/shoppingCart/checkout">Checkout Process</Link>
        </nav>
        <div className={styles.titleAndOrderStageWrapper}>
          <div className={styles.titleAndSignInButtonWrapper} >
            <h1 className={styles.title}>Checkout</h1>
            <Link className={styles.signInLink} href="/register">Sign In</Link>
          </div>
          <OrderStage />
        </div>
        <h2 className={styles.subtitle}>Shipping Address</h2>
        <div className={styles.summaryAndShippingInfoWrapper}>
          <ShippingAddress />
          <OrderSummary />
        </div>
      </Container>
    </section>
  </MainContainer>
);

export default Checkout;
