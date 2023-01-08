import { Product } from 'types/main/Products';
import React, { ReactElement, useState } from 'react';
import classes from 'styles/base/container.module.scss';
import styles from 'styles/layout/AboutProduct/AboutProduct.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat';
import { Colors } from 'enums/colors';
import { SectionsAboutProduct } from 'enums/sectionsAboutProduct';
import { Details } from 'components/AboutProduct/Details';
import { Specs } from 'components/AboutProduct/Specs';
import zipLogo from 'images/icons/zipLogo.svg';
import Image from 'next/image';

type AboutProductProps = {
  product: Product | null
}



export const AboutProduct: React.FC<AboutProductProps> = ({ product }): ReactElement => {
  const {name, price, description, slug, url } = product || {};

  const [chosenColor, setChosenColor] = useState<Colors>(Colors.darkGrey);
  const [visibleAboutProductSection, setVisibleAboutProductSection] =
  useState<SectionsAboutProduct>(SectionsAboutProduct.aboutProduct);

  const [numberOfProduct, setNumberOfProduct] = useState<number>(1);

  const setDarkGreyColor = (): void => {
    setChosenColor(Colors.darkGrey);
  }

  const setWhiteColor = (): void => {
    setChosenColor(Colors.white);
  }

  const setGreyColor = (): void => {
    setChosenColor(Colors.grey);
  }


  const addProductCount = (): void => setNumberOfProduct(prevCount => prevCount + 1);
  const subtractProductCount = (): void => setNumberOfProduct(prevCount => {
    if (prevCount === 1) {
      setNumberOfProduct(prevCount);
    }

    return prevCount - 1;
  });



  const handleAboutProductInfoVisibility = (): void => {
    setVisibleAboutProductSection(SectionsAboutProduct.aboutProduct);
  }

  const handleDetailsVisibility = (): void => {
    setVisibleAboutProductSection(SectionsAboutProduct.details);
  }

  const handleSpecsVisibility = (): void => {
    setVisibleAboutProductSection(SectionsAboutProduct.specs);
  }

  return (
    <section className={styles.section}>
      <div className={styles.upperPart}>
        <ul className={styles.buttonsList}>
          <li className={styles.buttonsListItem}>
            <button
              className={cn(styles.button, {
                [styles.buttonActive]: visibleAboutProductSection === SectionsAboutProduct.aboutProduct
              })}
              onClick={handleAboutProductInfoVisibility}
              type="button"
              >
              About Product
            </button>
          </li>
          <li className={styles.buttonsListItem}>
            <button
              className={cn(styles.button, {
                [styles.buttonActive]: visibleAboutProductSection === SectionsAboutProduct.details
              })}
              onClick={handleDetailsVisibility}
              type="button"
                >
              Details
            </button>
          </li>
          <li className={styles.buttonsListItem}>
            <button
              className={cn(styles.button, {
                [styles.buttonActive]: visibleAboutProductSection === SectionsAboutProduct.specs
              })}
              onClick={handleSpecsVisibility}
              type="button"
                >
              Specs
            </button>
          </li>
        </ul>
        <div className={styles.paymentSection}>
          <p className={styles.price}>On Sale from
            {' '}
            <strong className={styles.lineBreak} >
              ${price && getTheRightPriceFormat(price)}.00
            </strong>
          </p>
          <div className={styles.countBlock}>
            <span className={styles.countNumber}>{numberOfProduct}</span>
            <div className={styles.arrows}>
              <button
                aria-label="count-up"
                className={cn(styles.arrow, styles.arrowUp)}
                onClick={addProductCount}
                type="button"
                  />
              <button
                aria-label="count-down"
                className={cn(styles.arrow, styles.arrowDown)}
                onClick={subtractProductCount}
                type="button"
                  />
            </div>
          </div>
          <button className={styles.buttonAddToCart} type="button">
            Add to Card
          </button>
          <Link className={styles.buttonPayPal} href="#" />
        </div>
      </div>
      <div className={styles.productSection} >
        <div className={styles.description} >
          <div className={classes.container} >
            <div className={styles.descriptionAdditionalContainerOnDesktop}>
              <nav className={styles.smallNavigation} >
                <Link className={styles.smallNavigationLink} href="/">Home</Link>
                <Link className={styles.smallNavigationLink} href="/laptops">Laptops</Link>
                <Link className={styles.smallNavigationLink} href={`/laptops/${name}`}>{name}</Link>
              </nav>
              <h2 className={styles.name}>{name}</h2>
              <Link className={styles.reviewLink} href="#">Be the first to review this product</Link>
              {visibleAboutProductSection === SectionsAboutProduct.aboutProduct && (
                <>
                  <p className={styles.descriptionText}>
                    {description}
                  </p><ul className={styles.colorsList}>
                    <li className={styles.colorsListItem}>
                      <div className={cn(styles.buttonChooseColorContainer, {
                        [styles.buttonChosenColorActive]: chosenColor === Colors.darkGrey
                      }
                      )}
                      >
                        <button
                          aria-label="colorDarkGrey"
                          className={cn(styles.buttonChooseColor, styles.buttonDarkGreyColor)}
                          onClick={setDarkGreyColor}
                          type="button" />
                      </div>
                    </li>
                    <li className={styles.colorsListItem}>
                      <div className={cn(styles.buttonChooseColorContainer, {
                        [styles.buttonChosenColorActive]: chosenColor === Colors.white
                      }
                      )}
                      >
                        <button
                          aria-label="colorWhite"
                          className={cn(styles.buttonChooseColor, styles.buttonWhiteColor)}
                          onClick={setWhiteColor}
                          type="button" />
                      </div>
                    </li>
                    <li className={styles.colorsListItem}>
                      <div className={cn(styles.buttonChooseColorContainer, {
                        [styles.buttonChosenColorActive]: chosenColor === Colors.grey
                      }
                      )}
                      >
                        <button
                          aria-label="colorGrey"
                          className={cn(styles.buttonChooseColor, styles.buttonGreyColor)}
                          onClick={setGreyColor}
                          type="button" />
                      </div>
                    </li>
                  </ul>
                </>
              )}
              {visibleAboutProductSection === SectionsAboutProduct.details && (
                <Details description={description} />
              )}
              {visibleAboutProductSection === SectionsAboutProduct.specs && (
                <Specs />
              )}
              <div className={styles.bottomPart} >
                <span className={styles.feedbackBlock} >
                  <strong>Have a Question? </strong>
                  <Link className={styles.feedbackBlockLink} href="/contactUs">Contact Us</Link>
                </span>
                <span className={styles.slug}>{slug}</span>
              </div>
            </div>
            <Link className={styles.moreInformationLink} href="#">
              <strong>
                + More information
              </strong>
            </Link>
          </div>

        </div>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <ul className={styles.userButtonsList}>
              <li className={styles.userButtonsListItem}>
                <button
                  aria-label='wishList'
                  className={cn(styles.userButtons, styles.addToWishListButton)}
                  type="button"
                />
              </li>
              <li className={styles.userButtonsListItem}>
                <button
                  aria-label='statistics'
                  className={cn(styles.userButtons, styles.statisticsButton)}
                  type="button"
                />
              </li>
              <li className={styles.userButtonsListItem}>
                <button
                  aria-label='email'
                  className={cn(styles.userButtons, styles.emailButton)}
                  type="button"
                />
              </li>
            </ul>
            <img
              alt={name}
              className={styles.image}
              src={url}
            />
            <div className={styles.bonusBlock} >
              <Image
                alt='zip-logo'
                className={styles.logoBonus}
                src={zipLogo}
              />
              <p className={styles.bonusDescription}>
                own it now, up to 6 months <br /> interest free {' '}
                <Link className={styles.moreInfoLinkBonus} href="#">learn more</Link>
              </p>
            </div>
          </div>
          <ul className={styles.activeSubsectionsButtonsList}>
            <li className={styles.activeSubsectionsButtonsListItem} >
              <button
                aria-label='about-product'
                className={cn(styles.smallNavButton, {
                  [styles.activeSmallNavButton]: visibleAboutProductSection === SectionsAboutProduct.aboutProduct
                })}
                onClick={handleAboutProductInfoVisibility}
                type="button"
              />
            </li>
            <li className={styles.activeSubsectionsButtonsListItem}>
              <button
                aria-label='product-details'
                className={cn(styles.smallNavButton, {
                  [styles.activeSmallNavButton]: visibleAboutProductSection === SectionsAboutProduct.details
                })}
                onClick={handleDetailsVisibility}
                type="button"
              />
            </li>
            <li className={styles.activeSubsectionsButtonsListItem}>
              <button
                aria-label='product-specs'
                className={cn(styles.smallNavButton, {
                  [styles.activeSmallNavButton]: visibleAboutProductSection === SectionsAboutProduct.specs
                })}
                onClick={handleSpecsVisibility}
                type="button"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
