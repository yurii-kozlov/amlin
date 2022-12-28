/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ReactElement, useState } from 'react';
import { Menu } from 'components/Menu';
import { observer } from 'mobx-react'
import styles from 'styles/layout/Navbar.module.scss';
import personalAccount from 'store/personalAccount';
import { Minicart } from './Minicart';

export const Navbar = observer((): ReactElement => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [isMinicartVisible, setIsMinicartVisible] = useState<boolean>(false);

  const handleMenuVisibility = (): void => setIsMenuVisible(!isMenuVisible);
  const handleMinicartVisibility = (): void => setIsMinicartVisible(!isMinicartVisible);

  return (
    <nav className={styles.block}>
      <div className={styles.menuIcon}>
        <a className={styles.menuLink} href="#menu" />
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a className={styles.listItemLink} href="#laptops">
            Laptops
          </a>
        </li>

        <li className={styles.listItem}>
          <a className={styles.listItemLink} href="#desktopPCs">
            Desktop PCs
          </a>
        </li>

        <li className={styles.listItem}>
          <a className={styles.listItemLink} href="#devices">
            Networking Devices
          </a>
        </li>

        <li className={styles.listItem}>
          <a className={styles.listItemLink} href="#printersScanners">
            Printers & Scanners
          </a>
        </li>

        <li className={styles.listItem}>
          <a className={styles.listItemLink} href="#pcParts">
            PC Parts
          </a>
        </li>

        <li className={styles.listItem}>
          <a className={styles.listItemLink} href="#otherProducts">
            All Other Products
          </a>
        </li>

        <li className={styles.listItem}>
          <a className={styles.listItemLink} href="#repairs">
            Repairs
          </a>
        </li>

        <li className={styles.listItem}>
          <a className={styles.listItemLink} href="#deals">
            Our Deals
          </a>
        </li>
      </ul>

      <div className={styles.personalSection}>
        <div className={styles.search}>
          <a className={styles.searchLink} href="#search" />
        </div>
        <div className={styles.basket}>
          <Minicart isMinicartVisible={isMinicartVisible} />
          <div className={styles.basketBlock}>{personalAccount.cart.length}</div>
          <a
            className={styles.basketLink}
            href="#bakset"
            onClick={handleMinicartVisibility}
            />
        </div>
        <div className={styles.profile}>
          <Menu isMenuVisible={isMenuVisible} />
          <a
            className={styles.profileLink}
            href="#profile"
            onClick={handleMenuVisibility}
          />
        </div>
      </div>
    </nav>
  );
});
