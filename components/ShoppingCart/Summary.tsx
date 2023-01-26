import React, { ReactElement, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat';
import { CountryPicker } from 'components/ShoppingCart/CountryPicker';
import arrowTop from 'images/icons/arrowTop.svg';
import arrowDown from 'images/icons/arrowDown.svg';
import zipLogo from 'images/icons/zipLogo.svg';
import styles from 'styles/layout/ShoppingCart/Summary.module.scss';


export const Summary: React.FC = observer((): ReactElement => {
  const [isDestinationBlockVisible, setIsDestinationBlockVisible] = useState<boolean>(false);
  const [isDiscountBlockVisible, setIsDiscountBlockVisible] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [province, setProvince] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [shippingAddress, setShippingAddress] = useState<string>('store address');
  const [discountCode, setDiscountCode] = useState<string>('');

  const handleProvince = (event: React.ChangeEvent<HTMLInputElement>): void => setProvince(event.target.value);
  const handleZipCode = (event: React.ChangeEvent<HTMLInputElement>): void => setZipCode(event.target.value) ;
  const handleDeliveryAddress = (event: React.ChangeEvent<HTMLInputElement>): void =>
  setShippingAddress(event.target.value);
  const handleDiscountCode = (event: React.ChangeEvent<HTMLInputElement>): void => setDiscountCode(event.target.value);

  const tax = (personalAccount.totalOrderSum * 0.01).toFixed(2);
  const shippingPrice = personalAccount.cart.length === 0 ? 0 : 21;
  const GST = (+tax * 0.1).toFixed(2);

  const totalOrderSum = personalAccount.totalOrderSum + Number(tax) + shippingPrice + Number(GST);

  return (
    <div className={cn(styles.summary, styles.cart)}>
      <h4 className={styles.summaryTitle}>Summary</h4>
      <div className={styles.shippingAndTaxBlock}>
        <div className={styles.arrowAndButtonWrapper}>
          <button
            aria-label='shippingAndTax'
            className={cn(styles.button,styles.shippingAndTaxButton)}
            onClick={(): void => setIsDestinationBlockVisible(!isDestinationBlockVisible)}
            type="button"
            >
            Estimate Shipping and Tax
          </button>
          {isDestinationBlockVisible ? (
            <Image alt="arrow-down" className={styles.smallArrow} src={arrowDown} />
          ) : (
            <Image alt="arrow-up" className={styles.smallArrow} src={arrowTop} />
          )}

        </div>
        <p className={styles.shippingAndTaxHint} >Enter your destination to get a shipping estimate.</p>
        <ul className={cn(styles.destinationBlock, {[styles.destinationBlockVisible]: isDestinationBlockVisible})} >
          <li className={styles.destinationBlockListItem} >
            <CountryPicker selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
          </li>
          <li className={styles.destinationBlockListItem} >
            <label className={styles.label} htmlFor='state/province'>
              State/Province
              <input
                className={styles.destinationBlockInput}
                id='state/province'
                name='state/province'
                onChange={handleProvince}
                type="text"
                value={province}
              />
            </label>
          </li>
          <li className={styles.destinationBlockListItem} >
            <label className={styles.label} htmlFor='zip/postalCode'>
              Zip/Postal Code
              <input
                className={styles.destinationBlockInput}
                id='zip/postalCode'
                name='zip/postalCode'
                onChange={handleZipCode}
                type="text"
                value={zipCode}
              />
            </label>
          </li>
          <li className={styles.destinationBlockListItem} >
            <h5 className={styles.subtitleRate}>Standard rate</h5>
            <label className={styles.deliveryDestinationRaddioButton} htmlFor="custom address">
              <input
                checked={shippingAddress === 'custom address'}
                className={styles.deliveryDestination}
                id='custom address'
                name='address'
                onChange={handleDeliveryAddress}
                type="radio"
                value="custom address"
              />
              Price may vary depending on the item/destination. Shop Staff will contact you. ${shippingPrice}.00
            </label>
          </li>
          <li className={styles.destinationBlockListItem} >
            <h5 className={styles.subtitleRate}>Pickup from store</h5>
            <label className={styles.deliveryDestinationRaddioButton} htmlFor="store address">
              <input
                checked={shippingAddress === 'store address'}
                className={styles.deliveryDestination}
                id='store address'
                name='address'
                onChange={handleDeliveryAddress}
                type="radio"
                value="store address"
              />
              1234 Street Adress, City Address, 1234 $0.00
            </label>
          </li>
        </ul>
      </div>

      <div className={styles.discountCode}>
        <div className={styles.arrowAndButtonWrapper} >
          <button
            aria-label='discountCode'
            className={cn(styles.button,styles.discountCodeButton)}
            onClick={(): void => setIsDiscountBlockVisible(!isDiscountBlockVisible)}
            type="button"
          >
            Apply Discount Code
          </button>
          {isDiscountBlockVisible ? (
            <Image alt="arrow-down" className={styles.smallArrow} src={arrowDown} />
          ) : (
            <Image alt="arrow-up" className={styles.smallArrow} src={arrowTop} />
          )}
        </div>
        <div className={cn(styles.discountBlock, {[styles.discountBlockVisible]: isDiscountBlockVisible})} >
          <label
            className={styles.label}
            htmlFor="discountCode"
          >
            Enter discount code
            <input
              className={cn(styles.destinationBlockInput, styles.discountInput)}
              id='discountCode'
              name='discount code'
              onChange={handleDiscountCode}
              placeholder='Enter Discount code'
              type="text"
              value={discountCode}
            />
          </label>
          <Link className={styles.checkOutMultipleAddresses} href="#">Check Out with Multiple Addresses</Link>
          <button
            aria-label='applyDiscount'
            className={styles.buttonDiscount}
            type="submit"
          >
            Apply Discount
          </button>
        </div>
      </div>
      <div className={styles.detailedOrderInfo} >
        <div className={styles.detailedOrderSubsectionInfo}>
          <h6 className={styles.subsectionInfoTitle}>Subtotal</h6>
          <span className={styles.subsectionSum} >${getTheRightPriceFormat(personalAccount.totalOrderSum)}.00</span>
        </div>
        <div className={styles.detailedOrderSubsectionInfo}>
          <h6 className={styles.subsectionInfoTitle}>Shipping</h6>
          <span className={cn(styles.subsectionSum, styles.shippingPrice)}>${shippingPrice}</span>
          <p className={styles.additionalRateInfo}>
            Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.
          </p>
        </div>
        <div className={styles.detailedOrderSubsectionInfo}>
          <h6 className={styles.subsectionInfoTitle}>Tax</h6>
          <span className={styles.subsectionSum}>${tax}</span>
        </div>
        <div className={styles.detailedOrderSubsectionInfo}>
          <h6 className={styles.subsectionInfoTitle}>GST(10%)</h6>
          <span className={styles.subsectionSum}>${GST}</span>
        </div>
        <div className={styles.detailedOrderSubsectionInfo}>
          <h6 className={styles.subsectionInfoTitle}>Order Total</h6>
          <span className={cn(styles.subsectionSum, styles.orderTotal)}>${getTheRightPriceFormat(totalOrderSum)}</span>
        </div>
      </div>
      <div className={styles.checkoutLinks} >
        <Link
          className={cn(styles.linkCheckout,styles.linkCheckoutMain)}
          href="/shoppingCart/checkout"
        >
          Proceed to Checkout
        </Link>
        <Link
          className={cn(styles.linkCheckout,styles.linkCheckoutPaypal)}
          href="/checkoutPaypal"
        >
          Check out with
        </Link>
        <Link
          className={cn(styles.linkCheckout,styles.linkCheckoutMultipleAddress)}
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
        <p className={styles.bonusDescription}><strong>own </strong>
          it now, up to 6 months <br /> interest free
          <Link className={styles.moreInfoLink} href="#">learn more</Link>
        </p>
      </div>
    </div>
  )
} );
