import React, { ReactElement, useState } from 'react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { checkoutPageFormInputs, schemaCheckoutPage } from 'constants/validationSchemas/schemaCheckoutPage';
import { CountryPicker } from 'components/ShoppingCart/CountryPicker';
import styles from 'styles/layout/Checkout/ShippingAddress.module.scss';

export const ShippingAddress: React.FC = (): ReactElement => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [shippingAddress, setShippingAddress] = useState<string>('store address');

  const {
    register, handleSubmit, reset, formState: {errors}
  } = useForm<checkoutPageFormInputs>({
    resolver: yupResolver(schemaCheckoutPage)
  })

  const onSubmit = (): void => reset();

  const handleDeliveryAddress = (event: React.ChangeEvent<HTMLInputElement>): void =>
  setShippingAddress(event.target.value);

  return (
    <div className={styles.section}>
      <form
        action="#"
        className={styles.form}
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.emailInputWrapper}>
          <label
            className={styles.label}
            htmlFor="email"
          >
            <h5 className={styles.inputTitle} >Email Address</h5>
            <input
              className={cn(styles.input, styles.inputEmail)}
              id='email'
              {...register('email')}
              name='email'
              type="text"
            />
            {errors.email && <p className={styles.error} >{errors.email.message}</p>}
          </label>
          <p className={styles.createAccountHint}>You can create an account after checkout.</p>
        </div>
        <div className={styles.inputWrapper}>
          <label
            className={styles.label}
            htmlFor="firstName"
          >
            <h5 className={styles.inputTitle}>First Name</h5>
            <input
              className={styles.input}
              {...register('firstName')}
              id='firstName'
              name='firstName'
              type="text"
            />
            {errors.firstName && <p className={styles.error} >{errors.firstName.message}</p>}
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <label
            className={styles.label}
            htmlFor="lastName"
          >
            <h5 className={styles.inputTitle}>Last Name</h5>
            <input
              className={styles.input}
              {...register('lastName')}
              id='lastName'
              name='lastName'
              type="text"
            />
            {errors.lastName && <p className={styles.error} >{errors.lastName.message}</p>}
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <label
            className={styles.label}
            htmlFor="company"
          >
            <h5 className={styles.inputTitle}>Company</h5>
            <input
              className={styles.input}
              {...register('company')}
              id='company'
              name='company'
              type="text"
            />
            {errors.company && <p className={styles.error} >{errors.company.message}</p>}
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.streetInputWrapper} >
            <label
              className={styles.label}
              htmlFor="streetAddress1"
            >
              <h5 className={styles.inputTitle}>Street Address</h5>
              <input
                className={cn(styles.input, styles.streetInput)}
                {...register('street1')}
                id='streetAddress1'
                name='streetAddress1'
                type="text"
              />
              {errors.street1 && <p className={styles.error} >{errors.street1.message}</p>}
            </label>
          </div>
          <label htmlFor="streetAddress2">
            <input
              className={styles.input}
              {...register('street2')}
              id='streetAddress2'
              name='streetAddress2'
              type="text"
            />
            {errors.street2 && <p className={styles.error} >{errors.street2.message}</p>}
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <label
            className={styles.label}
            htmlFor="city"
          >
            <h5 className={styles.inputTitle}>City</h5>
            <input
              className={styles.input}
              {...register('city')}
              id='city'
              name='city'
              type="text"
            />
            {errors.city && <p className={styles.error} >{errors.city.message}</p>}
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <label
            className={styles.label}
            htmlFor="state"
          >
            <h5 className={styles.inputTitle}>State/Province</h5>
            <input
              className={cn(styles.input, styles.stateInput)}
              {...register('region')}
              id='region'
              name='region/province'
              type="text"
            />
            {errors.region && <p className={styles.error} >{errors.region.message}</p>}
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <label
            className={styles.label}
            htmlFor="zipCode"
          >
            <h5 className={styles.inputTitle}>Zip/PostalCode</h5>
            <input
              className={styles.input}
              {...register('zipCode')}
              id='zipCode'
              name='zipCode'
              type="text"
            />
            {errors.zipCode && <p className={styles.error} >{errors.zipCode.message}</p>}
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <CountryPicker
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            isComponentAtCheckoutPage
          />
        </div>
        <div className={styles.phoneNumberInputWrapper}>
          <label
            className={styles.label}
            htmlFor="phoneNumber"
          >
            <h5 className={styles.inputTitle}>Phone Number</h5>
            <input
              className={styles.input}
              {...register('phoneNumber')}
              id='phoneNumber'
              name='phoneNumber'
              type="text"
            />
            {errors.phoneNumber && <p className={styles.error} >{errors.phoneNumber.message}</p>}
          </label>
        </div>
        <div className={styles.shippingRateInputs}>
          <h5 className={styles.subtitleRate}>Standard rate</h5>
          <div className={styles.shippingRateWrapper}>
            <div className={styles.shippingRateInputWrapper} >
              <label className={styles.deliveryDestinationRaddioButtonLabel} htmlFor="custom address">
                <input
                  checked={shippingAddress === 'custom address'}
                  className={styles.deliveryDestination}
                  id='custom address'
                  {...register('shippingAddress')}
                  name='address'
                  onChange={handleDeliveryAddress}
                  type="radio"
                  value="custom address"
                />
                Price may vary depending on the item/destination. Shop Staff will contact you. $21.00
              </label>
            </div>
            <span className={styles.shippingPrice} >$21.00</span>
          </div>
          <h5 className={styles.subtitleRate}>Pickup from store</h5>
          <div className={styles.shippingRateWrapper}>
            <div className={styles.shippingRateInputWrapper}>
              <label className={styles.deliveryDestinationRaddioButtonLabel} htmlFor="store address">
                <input
                  checked={shippingAddress === 'store address'}
                  className={styles.deliveryDestination}
                  id='store address'
                  {...register('shippingAddress')}
                  name='address'
                  onChange={handleDeliveryAddress}
                  type="radio"
                  value="store address"
                />
                1234 Street Adress, City Address, 1234 $0.00
                {errors.shippingAddress && <p className={styles.error}>{errors.shippingAddress.message}</p>}
              </label>
            </div>
            <span className={styles.shippingPrice} >$0.00</span>
          </div>
        </div>
        <button className={styles.buttonNext} type="submit">Next</button>
      </form>
    </div>
  );
}
