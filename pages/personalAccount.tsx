import React, { ReactElement, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticPropsResult } from 'next';
import cn from 'classnames';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { instance } from 'api/api';
import { Profile } from 'types/profile/Profile';
import { AccountSubsections } from 'enums/accountSubsections';
import { MainContainer } from 'components/MainContainer';
import { Container } from 'components/Container';
import { AccountDashboard } from 'components/PersonalAccount/AccountDashboard';
import arrowTop from 'images/icons/arrowTop.svg';
import arrowDown from 'images/icons/arrowDown.svg';
import styles from 'styles/pages/personalAccount.module.scss';

type PersonalAccountProps = {
  profileInfo: Profile
}

const PersonalAccount: React.FC<PersonalAccountProps> = observer(({ profileInfo }): ReactElement => {
  const [activeSubsection, setActiveSubsection] = useState<AccountSubsections>(AccountSubsections.accountDashboard);
  const [isSubsectionsListBlockVisible, setIsSubsectionsListBlockVisible] = useState<boolean>(false);

  const handleSubsectionsVisibility = (subsection: AccountSubsections): void => setActiveSubsection(subsection);
  const handleSubsectionsListVisibility = (): void => setIsSubsectionsListBlockVisible(!isSubsectionsListBlockVisible);

  return (
    <MainContainer>
      <Container>
        <section className={cn(styles.section, styles.pageSection)} >
          <nav className={styles.navigation} >
            <Link className={styles.navigationLink} href="/">Home</Link>
            <Link className={styles.navigationLink} href="/personalAccount">My Dashboard</Link>
          </nav>
          <h1 className={styles.title}>My Dashboard</h1>
          <div className={styles.subsectionsAndDetailedSubsectionInfoWrapper}>
            <div className={styles.subsectionsListBlock}>
              <button
                className={styles.buttonAccountDashboardOnMobile}
                onClick={handleSubsectionsListVisibility}
                type="button"
              >
                Account Dashboard
                {isSubsectionsListBlockVisible ? (
                  <Image alt="arrow-top" className={styles.arrow} src={arrowTop} />
                ): (
                  <Image alt="arrow-down" className={styles.arrow} src={arrowDown} />
                )}

              </button>
              <ul className={cn(styles.subsectionsList,
                styles.subsectionsListOnMobile,
                {[styles.subsectionsListVisibleOnMobile]: isSubsectionsListBlockVisible}
              )}>
                <li className={styles.subsectionsListItem}>
                  <button
                    className={cn(styles.subsectionsListItemButton,
                      {[styles.activeSubsection]: activeSubsection === AccountSubsections.accountDashboard}
                    )}
                    onClick={(): void => handleSubsectionsVisibility(AccountSubsections.accountDashboard)}
                    type="button"
                  >
                    Account Dashboard
                  </button>
                </li>
                <li className={styles.subsectionsListItem}>
                  <button
                    className={cn(styles.subsectionsListItemButton,
                      {[styles.activeSubsection]: activeSubsection === AccountSubsections.accountInformation}
                    )}
                    onClick={(): void => handleSubsectionsVisibility(AccountSubsections.accountInformation)}
                    type="button"
                  >
                    Account Information
                  </button>
                </li>
                <li className={styles.subsectionsListItem}>
                  <button
                    className={cn(styles.subsectionsListItemButton,
                      {[styles.activeSubsection]: activeSubsection === AccountSubsections.addressBook}
                    )}
                    onClick={(): void => handleSubsectionsVisibility(AccountSubsections.addressBook)}
                    type="button"
                  >
                    Address Book
                  </button>
                </li>
                <li className={cn(styles.subsectionsListItem, styles.subsectionSeparator)}>
                  <button
                    className={cn(styles.subsectionsListItemButton,
                      {[styles.activeSubsection]: activeSubsection === AccountSubsections.myOrders}
                    )}
                    onClick={(): void => handleSubsectionsVisibility(AccountSubsections.myOrders)}
                    type="button"
                  >
                    My Orders
                  </button>
                </li>
                <li className={styles.subsectionsListItem}>
                  <button
                    className={cn(styles.subsectionsListItemButton,
                      {[styles.activeSubsection]: activeSubsection === AccountSubsections.myDownloadableProducts}
                    )}
                    onClick={(): void => handleSubsectionsVisibility(AccountSubsections.myDownloadableProducts)}
                    type="button"
                  >
                    My Downloadable Products
                  </button>
                </li>
                <li className={styles.subsectionsListItem}>
                  <button
                    className={cn(styles.subsectionsListItemButton,
                      {[styles.activeSubsection]: activeSubsection === AccountSubsections.storedPaymentMethods}
                    )}
                    onClick={(): void => handleSubsectionsVisibility(AccountSubsections.storedPaymentMethods)}
                    type="button"
                  >
                    Stored Payment Methods
                  </button>
                </li>
                <li className={styles.subsectionsListItem}>
                  <button
                    className={cn(styles.subsectionsListItemButton,
                      {[styles.activeSubsection]: activeSubsection === AccountSubsections.billingAgreements}
                    )}
                    onClick={(): void => handleSubsectionsVisibility(AccountSubsections.billingAgreements)}
                    type="button"
                  >
                    Billing Agrements
                  </button>
                </li>
                <li className={cn(styles.subsectionsListItem, styles.subsectionSeparator)}>
                  <button
                    className={cn(styles.subsectionsListItemButton,
                      {[styles.activeSubsection]: activeSubsection === AccountSubsections.myWishList}
                    )}
                    onClick={(): void => handleSubsectionsVisibility(AccountSubsections.myWishList)}
                    type="button"
                  >
                    My Wish List
                  </button>
                </li>
                <li className={styles.subsectionsListItem}>
                  <button
                    className={cn(styles.subsectionsListItemButton,
                      {[styles.activeSubsection]: activeSubsection === AccountSubsections.myProductReviews}
                    )}
                    onClick={(): void => handleSubsectionsVisibility(AccountSubsections.myProductReviews)}
                    type="button"
                  >
                    My Product Reviews
                  </button>
                </li>
                <li className={styles.subsectionsListItem}>
                  <button
                    className={cn(styles.subsectionsListItemButton,
                      {[styles.activeSubsection]: activeSubsection === AccountSubsections.newsletterSubscriptions}
                    )}
                    onClick={(): void => handleSubsectionsVisibility(AccountSubsections.newsletterSubscriptions)}
                    type="button"
                  >
                    Newsletter Subscriptions
                  </button>
                </li>
              </ul>
              <div className={cn(styles.subsection, styles.subsectionOnTabletAndDesktop)}>
                <button className={styles.subsectionButton} type="button">Compare Products</button>
                <span className={styles.compareItemsText}>You have no items to compare.</span>
              </div>
              <div className={cn(styles.subsection, styles.subsectionOnTabletAndDesktop)}>
                <button className={styles.subsectionButton} type="button">My Wish List</button>
                <span className={styles.compareItemsText}>
                  {personalAccount.wishList.length > 0
                  ? `You have ${personalAccount.wishList.length} items in your wishlist`
                  : 'You have no items in your wish list.'}
                </span>
              </div>
            </div>
            <div className={styles.subsectionDetailedInfo} >
              <h1 className={styles.titleOnMobile}>My Dashboard</h1>
              <AccountDashboard profileInfo={profileInfo} />
            </div>
            <div className={cn(styles.subsection, styles.subsectionOnMobile)}>
              <button className={styles.subsectionButton} type="button">Compare Products</button>
              <span className={styles.compareItemsText}>You have no items to compare.</span>
            </div>
            <div className={cn(styles.subsection, styles.subsectionOnMobile)}>
              <button className={styles.subsectionButton} type="button">My Wish List</button>
              <span className={styles.compareItemsText}>
                {personalAccount.wishList.length > 0
                  ? `You have ${personalAccount.wishList.length} items in your wishlist`
                  : 'You have no items in your wish list.'}
              </span>
            </div>
          </div>
        </section>
      </Container>
    </MainContainer>
  );
})

export default PersonalAccount;

type getStaticPropsReturnMain = {
  profileInfo: Profile
}

export async function getStaticProps():Promise<GetStaticPropsResult<getStaticPropsReturnMain>> {
  const response = await instance.get('/profile');
  const profileInfo: Profile = response.data;

  return {
    props: {profileInfo},
  }
}
