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
        <li className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href="#laptops"
          >
            Laptops
          </a>
        </li>

        <li className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href="#desktopPCs"
          >
            Desktop PCs
          </a>
        </li>

        <li className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href="#devices"
          >
            Networking Devices
          </a>
        </li>

        <li className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href="#printersScanners"
          >
            Printers & Scanners
          </a>
        </li>

        <li className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href="#pcParts"
          >
            PC Parts
          </a>
        </li>

        <li className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href="#otherProducts"
          >
            All Other Products
          </a>
        </li>

        <li className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href="#repairs"
          >
            Repairs
          </a>
        </li>

        <li className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href="#deals"
          >
            Our Deals
          </a>
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
            {personalAccount.cart.length}
          </div>
          <button
            aria-label='minicart'
            className={styles.minicartButton}
            onClick={handleMinicartVisibility}
            type="button"
           />
        </div>
        <div className={styles.profile} >
          <Menu isMenuVisible={isMenuVisible} />
          <button
            aria-label='profile'
            className={styles.profileButton}
            onClick={handleMenuVisibility}
            type="button"
           />
        </div>
      </div>
    </nav>
    );
});
