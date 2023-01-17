import React, { ReactElement, useState } from 'react';
import { countryList } from 'api/countryList';
import cn from 'classnames';
import styles from 'styles/layout/ShoppingCart/CountryPicker.module.scss';

type CountryPickerProps = {
  selectedCountry: string,
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>
}

export const CountryPicker: React.FC<CountryPickerProps> = ({ selectedCountry, setSelectedCountry }): ReactElement => {
  const [isCountryPickerVisible, setisCountryPickerVisible ] = useState<boolean>(false);

  const handleCountryPickerVisibility = (): void => setisCountryPickerVisible(!isCountryPickerVisible);


  return (
    <div className={styles.block}>
      <label className={styles.label} htmlFor="country">
        Country
        <button
          className={styles.button}
          id='country'
          onClick={handleCountryPickerVisibility}
          type="button"
        >
          {selectedCountry ? `${selectedCountry}`: 'Choose a country'}
        </button>
      </label>
      <ul className={cn(styles.list, {[styles.listVisible]: isCountryPickerVisible})}>
        {countryList.map((country) => (
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
        <li className={styles.listItem}>England</li>
        <li className={styles.listItem}>USA</li>
        <li className={styles.listItem}>Ukraine</li>
      </ul>
    </div>
  );
}
