import React, { ReactElement, useState } from 'react'
import { Menu } from 'components/Menu';
import styles from 'styles/Navbar.module.scss';

export const Navbar = (): ReactElement => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const handleMenuVisibility = (): void => setIsMenuVisible(!isMenuVisible);

  return (
    <nav className={styles.block} >
      <div className={styles.menuIcon} >
        <button
          aria-label='menu'
          className={styles.menuButton}
          type="button"
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
          <div className={styles.minicartBlock}>
            2
          </div>
          <button
            aria-label='minicart'
            className={styles.minicartButton}
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
}
