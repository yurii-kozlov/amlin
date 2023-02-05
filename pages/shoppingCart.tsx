import React, { ReactElement } from 'react';
import Link from 'next/link';
import { v4 as uuid_v4 } from 'uuid';
import cn from 'classnames';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { MainContainer } from 'components/MainContainer';
import { Container } from 'components/Container';
import { ShoppingCartItemBlock } from 'components/ShoppingCart/ShoppingCartItemBlock';
import { Summary } from 'components/ShoppingCart/Summary';
import styles from 'styles/pages/shoppingCart.module.scss';

const ShoppingCart: React.FC = observer((): ReactElement => (
  <MainContainer pageDescription='shopping cart' title='Shopping Cart'>
    <section className={cn(styles.section, styles.sectionPage)} >
      <Container>
        <nav className={styles.navigation} >
          <Link className={styles.navigationLink} href="/">Home</Link>
          <Link className={styles.navigationLink} href="/shoppingCart">Cart</Link>
        </nav>
        <h1 className={styles.title}>Shopping Cart</h1>
        <div className={styles.cartAndSummeryWrapper}>
          {personalAccount.cart.length === 0 ? (
            <h2 className={styles.emptyCartTitle} >Your Shopping Cart is empty</h2>
            ) : (
              <div className={styles.cart}>
                <ul className={styles.cartProductList}>
                  {personalAccount.cart.map((product) => (
                    <ShoppingCartItemBlock key={uuid_v4()} product={product} />
                ))}
                </ul>
                <div className={styles.cartButtons} >
                  <Link className={cn(styles.cartButton, styles.continueShoppingLink)} href="/">Continue Shopping</Link>
                  <button
                    aria-label='clear-cart'
                    className={cn(styles.cartButton,styles.buttonClearShoppingCart)}
                    onClick={(): void => personalAccount.clearCart()}
                    type='button'
                  >
                    Clear Shopping Cart
                  </button>
                </div>
              </div>
            )}
          <Summary/>
        </div>
      </Container>
    </section>
  </MainContainer>
  ))

export default ShoppingCart;
