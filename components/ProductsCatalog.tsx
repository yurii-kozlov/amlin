import React, { ReactElement, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { uuid } from 'uuidv4';
import { Product} from 'types/main/Products';
import { Sorting } from 'enums/sorting';
import { ProductViewType } from 'enums/productsViewType';
import { FilteringColors } from 'enums/filteringColors';
import { priceRanges, filterByPriceRange, filterByName } from 'helpers/applyFilters';
import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat';
import { sortProducts } from 'helpers/sortProducts';
import { perPageProductsQuantity } from 'constants/perPageProductsQuantity';
import { sortingWays } from 'constants/sortingWays';
import { MainContainer } from 'components/MainContainer';
import { Container } from 'components/Container';
import { PaginatedItems } from 'components/PaginatedItems';
import imageProducts from 'images/imageProducts.png'
import arrowTop from 'images/icons/arrowTop.svg';
import arrowDown from 'images/icons/arrowDown.svg';
import styles from 'styles/layout/ProductsCatalog/ProductsCatalog.module.scss';
import { useRouter } from 'next/router';

type ProductsCatalogProps = {
  products: Product[]
}

export const ProductsCatalog: React.FC<ProductsCatalogProps> = observer(({ products: productsList }): ReactElement => {
  const [products] = useState<Product[]>(productsList);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsList);

  const [pricingRange, setPricingRange] = useState<number[]>([]);
  const [isPriceFilteringMenuVisible, setIsPriceFilteringMenuVisible] = useState<boolean>(false);

  const [productsViewType, setProductsViewType] = useState<ProductViewType>(ProductViewType.catalog);

  const [isPerPageSortingMenuVisible, setIsPerPageSortingMenuVisible] = useState<boolean>(false);
  const [productsPerPage, setProductsPerPage] = useState<number>(5)
  const [isGeneralSortingMenuVisible, setIsGeneralSortingMenuVisible] = useState<boolean>(false);
  const [sortingWay, setSortingWay] = useState<Sorting | string>(Sorting.name);

  const [filteringColor, setFilteringColor] = useState<FilteringColors>(FilteringColors.red)
  const [isColorFilteringMenuVisible, setIsColorFilteringMenuVisible] = useState<boolean>(false);

  const [isNameFilteringMenuVisible, setIsNameFilteringMenuVisible] = useState<boolean>(false);
  const [filteringByName, setFilteringByName] = useState<string>('');
  const [isEmptyNameFilteringError, setIsEmptyNameFilteringError] = useState<boolean>(false);

  const handleFilteringByName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.value) {
      setIsEmptyNameFilteringError(true);
    } else {
      setIsEmptyNameFilteringError(false);
    }

    return setFilteringByName(event.target.value);
  }

  const handleNameFilteringMenuVisibility = (): void => setIsNameFilteringMenuVisible(!isNameFilteringMenuVisible);
  const handleColorFilteringMenuVisibility = (): void => setIsColorFilteringMenuVisible(!isColorFilteringMenuVisible);
  const handlePriceMenuVisibility = (): void => setIsPriceFilteringMenuVisible(!isPriceFilteringMenuVisible);
  const setCatalogViewType = (): void => setProductsViewType(ProductViewType.catalog);
  const setListViewType = (): void => setProductsViewType(ProductViewType.list);
  const handlePerPageSortingMenuVisibility = (): void => setIsPerPageSortingMenuVisible(!isPerPageSortingMenuVisible);
  const handleProductsQuantityPerPage = (event:React.MouseEvent<HTMLButtonElement>): void => {
    setProductsPerPage(Number(event.currentTarget.value));
    handlePerPageSortingMenuVisibility();
  }
  const handleSorting = (event:React.MouseEvent<HTMLButtonElement>): void => {
    setSortingWay((event.currentTarget.value));
    handleSortingMenuVisibility();

  }
  const handleSortingMenuVisibility = (): void => setIsGeneralSortingMenuVisible(!isGeneralSortingMenuVisible);

  const router = useRouter();

  return (
    <MainContainer>
      <Container>
        <section className={cn(styles.section, styles.sectionMarginBottom)}>
          <Image alt='banner' className={styles.banner} src={imageProducts} />
          <div className={styles.navigation}>
            <Link className={styles.navigationLink} href="/">Home</Link>
            <Link className={styles.navigationLink} href={router.pathname}>{router.pathname.slice(1)}</Link>
          </div>
          <h1 className={styles.title}>{router.pathname.slice(1)}</h1>
          <div className={styles.buttonsAndItemsPerPageWrapper}>
            <span className={styles.allItemsIndicator}>All items - {products.length}</span>
            <div className={styles.buttons}>
              {pricingRange.length > 0 && (
                <button
                  className={styles.priceRangesIndicator}
                  onClick={(): void => {
                    setFilteredProducts(products);
                    setPricingRange([]);
                  }}
                  type="button"
                >
                  ${getTheRightPriceFormat(pricingRange[0])}.00 - ${getTheRightPriceFormat(pricingRange[1])}.00
                </button>
              )}
              <div className={styles.buttonsPerPageWrapper} >
                <button
                  className={styles.perPageButton}
                  onClick={(): void => handleSortingMenuVisibility()}
                  type="button"
                >
                  <span>Sort by:<strong className={styles.perPageQuantity}> {sortingWay}</strong></span>
                  {isGeneralSortingMenuVisible ? (
                    <Image alt="arrow-down" className={styles.arrow} src={arrowDown}/>
                  ): (
                    <Image alt="arrow-top" className={styles.arrow} src={arrowTop}/>
                  )}
                </button>
                <ul className={cn(styles.perPageList, {[styles.perPageListVisible]: isGeneralSortingMenuVisible})} >
                  {sortingWays.map((sortBy) =>(
                    <li className={styles.pepPageListItem} key={uuid()} >
                      <button
                        className={styles.perPageListIitemButton}
                        onClick={handleSorting}
                        type="button"
                        value={sortBy}
                      >
                        {sortBy}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.buttonsPerPageWrapper} >
                <button
                  className={styles.perPageButton}
                  onClick={(): void => handlePerPageSortingMenuVisibility()}
                  type="button"
                >
                  Show: <strong className={styles.perPageQuantity}>{productsPerPage} per page</strong>
                  {isPerPageSortingMenuVisible ? (
                    <Image alt="arrow-down" className={styles.arrow} src={arrowDown}/>
                  ): (
                    <Image alt="arrow-top" className={styles.arrow} src={arrowTop}/>
                  )}
                </button>
                <ul className={cn(styles.perPageList, {[styles.perPageListVisible]: isPerPageSortingMenuVisible})} >
                  {perPageProductsQuantity.map((quantity) =>(
                    <li className={styles.pepPageListItem} key={uuid()} >
                      <button
                        className={styles.perPageListIitemButton}
                        onClick={handleProductsQuantityPerPage}
                        type="button"
                        value={quantity}
                      >
                        {quantity} per page
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                aria-label='catalog-view'
                className={cn(
                  styles.viewTypeButton,
                  styles.viewAsCatalogButton,
                  {[styles.catalogViewActiveButton]: productsViewType === ProductViewType.catalog}
                )}
                onClick={setCatalogViewType}
                type="button"
              />
              <button
                aria-label='list-view'
                className={cn(
                  styles.viewTypeButton,
                  styles.viewAsListButton,
                  {[styles.catalogViewActiveButton]: productsViewType === ProductViewType.list}
                )}
                onClick={setListViewType}
                type="button"
              />
            </div>
          </div>
          <div className={styles.filteringAndCatalogWrapper}>
            <div className={cn(styles.filterSection, styles.filterSectionMarginBottom)}>
              <div className={cn(styles.filteringSettingsSection,styles.filteringSectionMarginBottom)}>
                <h4 className={styles.filterSectionTitle}>Filters</h4>
                <button
                  className={styles.clearFilterButton}
                  onClick={(): void => setFilteredProducts(products)}
                  type="button"
                >
                  Clear Filter
                </button>
                <button
                  className={styles.buttonPrice}
                  onClick={(): void =>handlePriceMenuVisibility()}
                  type="button"
                  >
                  Price
                  {isPriceFilteringMenuVisible ? (
                    <Image alt="arrow-down" className={styles.arrow} src={arrowDown}/>
                    ): (
                      <Image alt="arrow-top" className={styles.arrow} src={arrowTop}/>
                    )}
                </button>
                <ul className={cn(
                  styles.priceFilteringList,
                  {[styles.priceFilteringListVisible] :isPriceFilteringMenuVisible}
                )}
                >
                  {priceRanges.map((range) => {
                    const [min, max] = range;

                    return (
                      <li className={styles.priceFilteringlistItem} key={uuid()}>
                        <button
                          className={styles.priceFilteringButton}
                          onClick={(): void => {
                            setFilteredProducts(filterByPriceRange(products, range));
                            setPricingRange([min, max]);
                          }}
                          type="button"
                        >
                          <span>${getTheRightPriceFormat(min)}.00 - ${getTheRightPriceFormat(max)}.00</span>
                          <span>{filterByPriceRange(products, range).length}</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
                <button
                  className={styles.buttonPrice}
                  onClick={(): void =>handleColorFilteringMenuVisibility()}
                  type="button"
                  >
                  Color
                  {isColorFilteringMenuVisible ? (
                    <Image alt="arrow-down" className={styles.arrow} src={arrowDown}/>
                    ): (
                      <Image alt="arrow-top" className={styles.arrow} src={arrowTop}/>
                    )}
                </button>
                <ul className={cn(styles.colorsList, {[styles.colorsListVisible] : isColorFilteringMenuVisible})} >
                  <li className={styles.colorsListItem}>
                    <button
                      aria-label='color-black'
                      className={cn(
                        styles.colorButton,
                        styles.buttonColorBlack,
                        {[styles.activeColorButton] : filteringColor === FilteringColors.black}
                      )}
                      onClick={(): void => setFilteringColor(FilteringColors.black)}
                      type="button"
                    />
                  </li>
                  <li className={styles.colorsListItem}>
                    <button
                      aria-label='color-red'
                      className={cn(
                        styles.colorButton,
                        styles.buttonColorRed,
                        {[styles.activeColorButton] : filteringColor === FilteringColors.red}
                      )}
                      onClick={(): void => setFilteringColor(FilteringColors.red)}
                      type="button"
                    />
                  </li>
                </ul>
                <button
                  className={styles.buttonPrice}
                  onClick={(): void =>handleNameFilteringMenuVisibility()}
                  type="button"
                >
                  Name
                  {isNameFilteringMenuVisible ? (
                    <Image alt="arrow-down" className={styles.arrow} src={arrowDown}/>
                    ): (
                      <Image alt="arrow-top" className={styles.arrow} src={arrowTop}/>
                    )}
                </button>
                <div className={cn(
                  styles.nameFilteringMenu,
                  {[styles.nameFilteringMenuVisible]: isNameFilteringMenuVisible}
                )}
                >
                  <input
                    className={styles.nameInput}
                    id="productName"
                    name="productName"
                    onChange={handleFilteringByName}
                    placeholder='Please enter a product name'
                    type="text"
                    value={filteringByName}
                  />
                  {isEmptyNameFilteringError && <p className={styles.emptyInputError}>This field cannot be empty</p>}
                  <button
                    className={styles.applyFilteringByNameButton}
                    onClick={(): void => {
                      if (!isEmptyNameFilteringError) {
                        setFilteredProducts(filterByName(products,filteringByName))
                      }
                    }}
                    type="button"
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div className={cn(
                styles.subsection,
                styles.subsectionMarginBottom,
                styles.subsectionOnTabletAndDesktop
              )}
              >
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
            <div className={styles.catalog} >
              {filteredProducts.length === 0 ? (
                <h2 className={styles.titleEmptyCatalog}>
                  There are no items left with the indicated filtering settings
                </h2>
              ) : (
                <PaginatedItems
                  itemsPerPage={productsPerPage}
                  products={sortProducts(filteredProducts, sortingWay)}
                  productsViewType={productsViewType}
              />
              )}
            </div>
          </div>
        </section>
      </Container>
    </MainContainer>
    );
})
