import React, { ReactElement } from 'react';
import styles from 'styles/layout/ShoppingCart/Summary.module.scss';
import arrowTop from 'images/icons/arrowTop.svg';
import Image from 'next/image';
import Link from 'next/link';
// import arrowDown from 'images/icons/arrowDown.svg';
import zipLogo from 'images/icons/zipLogo.svg';

export const Summary: React.FC = (): ReactElement => (
  <div className={styles.summary}>
    <h4 className={styles.summaryTitle}>Summary</h4>
    <div className={styles.shippingAndTaxBlock}>
      <button
        aria-label='shippingAndTax'
        className={styles.shippingAndTaxButton}
        type="button"
      >
        Estimate Shipping and Tax
      </button>
      <Image alt="arrow-up" className={styles.smallArrow} src={arrowTop} />
      <p className={styles.shippingAndTaxHint} >Enter your destination to get a shipping estimate.</p>
    </div>

    <div className={styles.discountCode}>
      <button
        aria-label='discountCode'
        className={styles.discountCodeButton}
        type="button"
      >
        Apply Discount Code
      </button>
      <Image alt="arrow-up" className={styles.smallArrow} src={arrowTop} />
    </div>
    <div className={styles.detailedOrderInfo} >
      <div className={styles.detailedOrderSubsectionInfo}>
        <h6 className={styles.subsectionInfoTitle}>Subtotal</h6>
        <span className={styles.subsectionSum} >$13,047.00</span>
      </div>
      <div className={styles.detailedOrderSubsectionInfo}>
        <h6 className={styles.subsectionInfoTitle}>Shipping</h6>
        <span className={styles.subsectionSum}>$21</span>
        <p className={styles.additionalRateInfo}>
          Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.
        </p>
      </div>
      <div className={styles.detailedOrderSubsectionInfo}>
        <h6 className={styles.subsectionInfoTitle}>Tax</h6>
        <span className={styles.subsectionSum}>$1.91</span>
      </div>
      <div className={styles.detailedOrderSubsectionInfo}>
        <h6 className={styles.subsectionInfoTitle}>GST(10%)</h6>
        <span className={styles.subsectionSum}>$1.91</span>
      </div>
      <div className={styles.detailedOrderSubsectionInfo}>
        <h6 className={styles.subsectionInfoTitle}>Order Total</h6>
        <span className={styles.subsectionSum}>$13,068.00</span>
      </div>
    </div>
    <div className={styles.checkoutLinks} >
      <Link
        className={styles.buttonCheckout}
        href="/checkout"
      >
        Proceed to Checkout
      </Link>
      <Link
        className={styles.buttonCheckout}
        href="/checkoutPaypal"
      >
        Check out with PayPal
      </Link>
      <Link
        className={styles.buttonCheckout}
        href="/checkoutMultipleAddresses"
      >
        Check Out with Multiple Addresses
      </Link>
    </div>
    <div className={styles.bonusSection} >
      <Image
        alt='zip-logo'
        className={styles.logo}
        src={zipLogo}
      />
      <p className={styles.bonusDescription}><strong>own</strong> it now, up to 6 months interest free
      </p>
      <Link className={styles.moreInfoLink} href="#">learn more</Link>
    </div>
  </div>
);
