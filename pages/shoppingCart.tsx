import React, { ReactElement } from 'react';
import { MainContainer } from 'components/MainContainer';
import styles from 'styles/layout/shoppingCart.module.scss';
import classes from 'styles/base/container.module.scss';
import Link from 'next/link';
import { ShoppingCartItemBlock } from 'components/ShoppingCart/ShoppingCartItemBlock';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { uuid } from 'uuidv4';
import cn from 'classnames';
import { Summary } from 'components/ShoppingCart/Summary';

const ShoppingCart: React.FC = observer((): ReactElement => (
  <MainContainer>
    <section className={styles.section} >
      <div className={classes.container} >
        <nav className={styles.navigation} >
          <Link className={styles.navigationLink} href="/">Home</Link>
          <Link className={styles.navigationLink} href="/register">Login</Link>
        </nav>
        <h1 className={styles.title}>Shopping Cart</h1>
        {personalAccount.cart.length === 0 ? (
          <h2 className={styles.emptyTitle} >Your Shopping Cart is empty</h2>
        ) : (
          <div className={styles.cartAndSummeryWrapper}>
            <div className={styles.cart}>

              <ul className={styles.cartProductList}>
                {personalAccount.cart.map((minicartBlock) => (
                  <ShoppingCartItemBlock key={uuid()} minicartBlock={minicartBlock} />
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
            <Summary/>
          </div>
        )}
      </div>
    </section>
  </MainContainer>
  ))

export default ShoppingCart;
