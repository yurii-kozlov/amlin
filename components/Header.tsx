import React, { ReactElement, useState } from 'react';
import { observer } from 'mobx-react';
import { Minicart } from 'components/Minicart/Minicart';
import personalAccount from 'store/personalAccount';
import Image from 'next/image'
import Link from 'next/link';
import cn from 'classnames';
import { Menu } from 'components/Menu';
import { Container } from 'components/Container';
import { NavigationMenu } from 'components/NavigationMenu';
import faceBookIcon from 'images/icons/facebook.svg';
import instagramIcon from 'images/icons/instagram.svg';
import styles from 'styles/layout/Header.module.scss';

export const Header:React.FC = observer((): ReactElement => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [isMinicartVisible, setIsMinicartVisible] = useState<boolean>(false);
  const [isNavigationMenuVisible, setIsNavigationMenuVisible] = useState<boolean>(false);

  const handleNavigationMenuVisibility = (): void => setIsNavigationMenuVisible(!isNavigationMenuVisible);
  const handleMenuVisibility = (): void => setIsMenuVisible(!isMenuVisible);
  const handleMinicartVisibility = (): void => setIsMinicartVisible(!isMinicartVisible);

  return (
    <header className={cn(styles.page, styles.pageMarginBottom)}>
      <div className={styles.menu}>
        <Link aria-label='home' className={styles.menuIcon1} href="/"/>
      </div>
      <div className={styles.background_black}>
        <Container>
          <div className={styles.content} >
            <div className={styles.workingSchedule}>
              <span className={styles.workingDays}>Mon-Thu:{' '}</span>
              <span className={styles.workingHours}>9:00 AM - 5:30 PM</span>
              <i className={styles.arrow} />
            </div>
            <div className={styles.address}>
              <span className={styles.addressDetailed}>
                Visit our showroom in 1234 Street Adress City Address, 1234
                {' '}
              </span>
              <Link className={styles.contactUsLink} href="/contactUs">
                Contact Us
              </Link>
            </div>
            <div className={styles.contact}>
              <span className={styles.phoneNumber}>
                Call Us: (00) 1234 5678
              </span>
              <a
                className={styles.link}
                href="#facebook">
                <Image
                  alt='facebook'
                  height={15}
                  src={faceBookIcon}
                  width={15}
              />
              </a>
              <a
                className={styles.link}
                href="#instagram">
                <Image
                  alt='instagram'
                  height={15}
                  src={instagramIcon}
                  width={15}
              />
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.search}>
        <div className={styles.toggle}>
          <button
            aria-label="menu"
            className={styles.menuButton}
            onClick={handleNavigationMenuVisibility}
            type="button"
          />
          <NavigationMenu
            isNavigationMenuVisible={isNavigationMenuVisible}
            setIsNavigationMenuVisible={setIsNavigationMenuVisible}
          />
        </div>

        <div className={styles.searchBlock}>
          <div className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            placeholder='Search here'
            type="search"
          />
        </div>

        <div className={styles.minicart}>
          <Minicart isMinicartVisible={isMinicartVisible} />
          <div className={styles.minicartBlock}>
            {personalAccount.totalCountOfAddedProducts}
          </div>
          <button
            aria-label="minicart"
            className={styles.minicartButton}
            onClick={handleMinicartVisibility}
            type="button"
          />
        </div>

        <div className={styles.profile}>
          <Menu isMenuVisible={isMenuVisible} />
          <button
            aria-label="profile"
            className={styles.profileButton}
            onClick={handleMenuVisibility}
            type="button"
          />
          {isMenuVisible && <div className={styles.arrowTop} />}
        </div>
      </div>
    </header>
    );
});
