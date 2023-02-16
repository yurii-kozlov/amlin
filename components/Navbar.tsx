import React, { ReactElement, useState } from 'react'
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { Menu } from 'components/Menu';
import { Minicart } from 'components/Minicart/Minicart';
import Link from 'next/link';
import styles from 'styles/layout/Navbar.module.scss';

export const Navbar = observer((): ReactElement => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [isMinicartVisible, setIsMinicartVisible] = useState<boolean>(false);

  const handleMenuVisibility = (): void => setIsMenuVisible(!isMenuVisible);
  const handleMinicartVisibility = (): void => setIsMinicartVisible(!isMinicartVisible);

  return (
    <nav className={styles.block} >
      <div className={styles.menuIcon} >
        <Link
          aria-label='menu'
          className={styles.menuLink}
          href="/"
        />
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem} >
          <Link
            className={styles.listItemLink}
            data-testid="link-laptops-page"
            href="/laptops"
          >
            Laptops
          </Link>
        </li>

        <li className={styles.listItem}>
          <Link
            className={styles.listItemLink}
            href="/computers"
          >
            Computers
          </Link>
        </li>

        <li className={styles.listItem}>
          <Link
            className={styles.listItemLink}
            href="/monitors"
          >
            Monitors
          </Link>
        </li>

        <li className={styles.listItem}>
          <Link
            className={styles.listItemLink}
            href="/personalAccount"
          >
            Account
          </Link>
        </li>

        <li className={styles.listItem}>
          <Link
            className={styles.listItemLink}
            href="/aboutUs"
          >
            About Us
          </Link>
        </li>

        <li className={styles.listItem}>
          <Link
            className={styles.listItemLink}
            href="/register"
          >
            Registration
          </Link>
        </li>

        <li className={styles.listItem}>
          <Link
            className={styles.listItemLink}
            href="/contactUs"
          >
            Contact Us
          </Link>
        </li>

        <li className={styles.listItem}>
          <Link
            className={styles.listItemLink}
            href="/terms"
          >
            Terms & Conditions
          </Link>
        </li>
      </ul>

      <div className={styles.personalSection}>
        <div className={styles.search} >
          <button
            aria-label='search'
            className={styles.searchButton}
            type="button"
          />
        </div>
        <div className={styles.minicart} >
          <Minicart isMinicartVisible={isMinicartVisible} />
          <div className={styles.minicartBlock}>
            {personalAccount.totalCountOfAddedProducts}
          </div>
          <button
            aria-label='minicart'
            className={styles.minicartButton}
            data-testid="button-minicart"
            onClick={handleMinicartVisibility}
            type="button"
           />
        </div>
        <div className={styles.profile}>
          <Menu data-testid="menu" isMenuVisible={isMenuVisible} />
          <button
            aria-label='profile'
            className={styles.profileButton}
            data-testid="button-profile"
            onClick={handleMenuVisibility}
            type="button"
          />
        </div>
      </div>
    </nav>
    );
});
