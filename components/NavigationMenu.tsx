import React, { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { v4 as uuid_v4 } from 'uuid';
import { Container } from 'components/Container';
import { navigationList } from 'constants/navigationList';
import arrowRight from 'images/icons/arrowRightBlack.svg';
import tecsIcon from 'images/icons/menuDesktop.svg';
import styles from 'styles/layout/NavigationMenu.module.scss';

type NavigationMenuProps = {
  setIsNavigationMenuVisible: React.Dispatch<React.SetStateAction<boolean>>,
  isNavigationMenuVisible: boolean
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
    setIsNavigationMenuVisible, isNavigationMenuVisible
  }): ReactElement => (
    <section className={cn(styles.section, {[styles.sectionVisible]: isNavigationMenuVisible})} >
      <Container>
        <div className={styles.upperPart}>
          <Image alt='tecs icon' className={styles.icon} src={tecsIcon} />
          <button
            aria-label='closeMenu'
            className={styles.buttonCloseMenu}
            onClick={(): void => setIsNavigationMenuVisible(false)}
            type="button"
           />
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.navigationList} >
            {navigationList.map((navItem) => {
              const { name, route } = navItem;

              return (
                <li className={styles.navigationListItem} key={uuid_v4()} >
                  <Link className={styles.navigationLink} href={route}>
                    {name}
                    <Image alt='arrowRight' src={arrowRight} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </Container>
    </section>
  );
