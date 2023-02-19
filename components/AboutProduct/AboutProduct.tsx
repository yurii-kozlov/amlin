import React, { ReactElement, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { Product } from 'types/main/Products';
import { Goods } from 'enums/goods';
import { Colors } from 'enums/colors';
import { SectionsAboutProduct } from 'enums/sectionsAboutProduct';
import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat';
import personalAccount from 'store/personalAccount';
import { Details } from 'components/AboutProduct/Details';
import { Specs } from 'components/AboutProduct/Specs';
import { Container } from 'components/Container';
import { AdditionalBrandInfo } from 'components/AboutProduct/AdditionalBrandInfo';
import zipLogo from 'images/icons/zipLogo.svg';
import styles from 'styles/layout/AboutProduct/AboutProduct.module.scss';

type AboutProductProps = {
  product: Product | null,
  productType: Goods
}

export const AboutProduct: React.FC<AboutProductProps> = observer(({ product, productType }): ReactElement => {
  const {name, price, description, slug, url } = product || {};

  const [chosenColor, setChosenColor] = useState<Colors>(Colors.darkGrey);
  const [visibleAboutProductSection, setVisibleAboutProductSection] =
  useState<SectionsAboutProduct>(SectionsAboutProduct.aboutProduct);

  const [quantityOfProducts, setQuantityOfProducts] = useState<number>(1);

  const setDarkGreyColor = (): void =>setChosenColor(Colors.darkGrey)
  const setWhiteColor = (): void => setChosenColor(Colors.white);
  const setGreyColor = (): void => setChosenColor(Colors.grey);


  const addToCart = (productBlock: Product, productQuantity: number): void => {
    if (productBlock) {
      personalAccount.addProductToCart(productBlock, productQuantity);
    }
  }

  const addToWishList = (productBlock: Product): void => {
    if (productBlock) {
      personalAccount.addProductToWishList(productBlock);
    }
  }

  const addProductCount = (): void => setQuantityOfProducts(prevCount => prevCount + 1);
  const subtractProductCount = (): void => setQuantityOfProducts(prevCount => {
    if (prevCount === 1) {
      setQuantityOfProducts(prevCount);
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
    <>
      <section className={cn(styles.section, styles.page)}>
        <div className={styles.onTabletAndDesktop} >
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
                <span className={styles.countNumber}>{quantityOfProducts}</span>
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
              <button
                className={styles.buttonAddToCart}
                onClick={(): void => addToCart(product!, quantityOfProducts)}
                type="button"
              >
                Add to Card
              </button>
              <Link className={styles.buttonPayPal} href="#" />
            </div>
          </div>
          <div className={styles.productSection} >
            <div className={styles.description} >
              <Container >
                <div className={styles.descriptionAdditionalContainerOnDesktop}>
                  <nav className={styles.smallNavigation} >
                    <Link className={styles.smallNavigationLink} href="/">Home</Link>
                    <Link className={styles.smallNavigationLink} href={`/${productType}`}>{productType}</Link>
                    <Link className={styles.smallNavigationLink} href={`/${productType}/${name}`}>{name}</Link>
                  </nav>
                  <h2 className={styles.name}>{name}</h2>
                  <Link className={styles.reviewLink} href="/contactUs">Be the first to review this product</Link>
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
                    <Details description={description!} productType={productType} />
                )}
                  {visibleAboutProductSection === SectionsAboutProduct.specs && (
                    <Specs />
                )}
                  <div className={styles.contactPart} >
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
              </Container>
            </div>
            <div className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <ul className={styles.userButtonsList}>
                  <li className={styles.userButtonsListItem}>
                    <button
                      aria-label='wishList'
                      className={cn(styles.userButtons, styles.addToWishListButton)}
                      onClick={(): void => addToWishList(product!)}
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
        </div>

        <div className={styles.onMobile}>
          <Container>
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
            </div>
            <ul className={styles.buttonsList}>
              <li className={styles.buttonsListItem}>
                <button
                  className={cn(styles.button, {
                    [styles.buttonActive]: visibleAboutProductSection === SectionsAboutProduct.aboutProduct
                  })}
                  data-testid="aboutProduct-button"
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
                  data-testid="details-button"
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
                  data-testid="specs-button"
                  onClick={handleSpecsVisibility}
                  type="button"
                >
                  Specs
                </button>
              </li>
            </ul>
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
              <Details description={description!} productType={productType} />
                )}
            {visibleAboutProductSection === SectionsAboutProduct.specs && (
              <Specs />
                )}
            <div
              className={cn(styles.contactPart, {
              [styles.contactPartOnMobileVisible]: visibleAboutProductSection === SectionsAboutProduct.aboutProduct
              || visibleAboutProductSection === SectionsAboutProduct.specs
            })}
          >
              <span className={styles.feedbackBlock} >
                <strong>Have a Question? </strong>
                <Link className={styles.feedbackBlockLink} href="/contactUs">Contact Us</Link>
              </span>
              <span className={styles.slug}>{slug}</span>
            </div>
            <div className={styles.countAndPaymentBlockMobile} >
              <div className={styles.countBlock}>
                <span className={styles.countNumber}>{quantityOfProducts}</span>
                <div className={styles.arrows}>
                  <button
                    aria-label="count-up"
                    className={cn(styles.arrow, styles.arrowUp)}
                    data-testid="add-quantity-button"
                    onClick={addProductCount}
                    type="button"
                  />
                  <button
                    aria-label="count-down"
                    className={cn(styles.arrow, styles.arrowDown)}
                    data-testid="subtract-quantity-button"
                    onClick={subtractProductCount}
                    type="button"
                  />
                </div>
              </div>
              <button
                className={styles.buttonAddToCart}
                data-testid="add-to-cart-button"
                onClick={(): void => addToCart(product!, quantityOfProducts)}
                type="button"
            >
                Add to Card
              </button>
              <Link className={styles.buttonPayPal} href="#" />
            </div>
            <p className={styles.price}>On Sale from
              {' '}
              <strong className={styles.lineBreak} >
                ${price && getTheRightPriceFormat(price)}.00
              </strong>
            </p>
            <div
              className={cn( styles.contactPart, {
              [styles.contactUsWithDetailsSection]: visibleAboutProductSection === SectionsAboutProduct.details
            })}
          >
              <span className={styles.feedbackBlock} >
                <strong>Have a Question? </strong>
                <Link className={styles.feedbackBlockLink} href="/contactUs">Contact Us</Link>
              </span>
              <span className={styles.slug}>{slug}</span>
            </div>
          </Container>
        </div>
      </section>
      <AdditionalBrandInfo />
    </>
  );
})
