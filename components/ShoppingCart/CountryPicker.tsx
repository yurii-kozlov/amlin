import React, { ReactElement, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { countries } from 'api/countries';
import arrowTop from 'images/icons/arrowTop.svg';
import arrowDown from 'images/icons/arrowDown.svg';
import styles from 'styles/layout/ShoppingCart/CountryPicker.module.scss';

type CountryPickerProps = {
  selectedCountry: string,
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>,
  isComponentAtCheckoutPage?: boolean
}

export const CountryPicker: React.FC<CountryPickerProps> = (
  { selectedCountry, setSelectedCountry, isComponentAtCheckoutPage }): ReactElement => {
  const [isCountryPickerVisible, setisCountryPickerVisible ] = useState<boolean>(false);

  const handleCountryPickerVisibility = (): void => setisCountryPickerVisible(!isCountryPickerVisible);

  return (
    <div className={styles.block}>
      <label className={styles.label} htmlFor="country">
        Country
        <button
          className={cn(styles.button, {[styles.buttonAtCheckoutPage]: isComponentAtCheckoutPage})}
          id='country'
          onClick={handleCountryPickerVisibility}
          type="button"
        >
          {selectedCountry ? `${selectedCountry}`: 'Choose a country'}
          {isCountryPickerVisible ? (
            <Image alt="arrow-down" className={styles.arrow} src={arrowDown}/>
          ): (
            <Image alt="arrow-top" className={styles.arrow} src={arrowTop}/>
          )}
        </button>
      </label>
      <ul className={cn(
          styles.list,
          {[styles.listVisible]: isCountryPickerVisible},
          {[styles.listIAtCheckoutPage]: isComponentAtCheckoutPage}
      )}>
        {countries.map((country) => (
          <li
            className={styles.listItem}
            key={country}
          >
            <button
              className={styles.buttonChooseCountry}
              onClick={(): void => {
                setSelectedCountry(country);
                handleCountryPickerVisibility();
              } }
              type="button"
            >
              {country}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
