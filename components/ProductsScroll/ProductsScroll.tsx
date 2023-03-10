import React, { ReactElement, useRef, useState } from 'react';
import cn from 'classnames';
import { AxiosResponse } from 'axios';
import { v4 as uuid_v4 } from 'uuid';
import dynamic from 'next/dynamic';
import { Product, Products } from 'types/main/Products';
import { Goods } from 'enums/goods';
import { instance } from 'api/api';
import { useOnScreen } from 'hooks/useOnScreen';
import { getTheRightGoods } from 'helpers/getTheRightGoods';
import { Container } from 'components/Container';
import { ProductCard } from 'components/ProductCard';
import { Loader } from 'components/Loader';
import styles from 'styles/layout/ProductsScroll.module.scss';

const DynamicInfiniteScroll = dynamic(
  () => import ('react-infinite-scroll-component')
)

type ProductsScrollProps = {
  products: Product[]
}

const ProductsScroll: React.FC<ProductsScrollProps> = ({ products }): ReactElement => {
  const [allGoods, setAllGoods] = useState<Product[]>(products);
  const [visibleProductType, setVisibleProductType] = useState<Goods>(Goods.laptops);

  const [visibleGoods, setVisibleGoods] = useState<Product[]>(getTheRightGoods(Goods.laptops, products));
  const [isLoadingNewProducts, setIsLoadingNewProducts] = useState(true);

  const getMoreProducts = async (): Promise<void> => {
    const response: AxiosResponse<Products> = await instance
      .get(`/${visibleProductType}?_start=${visibleGoods.length}&_limit=10`);

    const newProducts: Products = response.data;
    setVisibleGoods((oldVisibleGoods: Product[]) => [...oldVisibleGoods, ...newProducts.list]);
    setAllGoods((oldGoods: Product[]) => [...oldGoods, ...newProducts.list])

    if (visibleGoods.length >= 100) {
      setIsLoadingNewProducts(false)
    }
  };

  const handleLaptopsVisibility = (): void => {
    setVisibleProductType(Goods.laptops);
    setVisibleGoods(getTheRightGoods(Goods.laptops, allGoods));
    setIsLoadingNewProducts(true);
  };

  const handleComputersVisibility = (): void => {
    setVisibleProductType(Goods.computers);
    setVisibleGoods(getTheRightGoods(Goods.computers, allGoods));
    setIsLoadingNewProducts(true);
  };

  const handleMonitorsVisibility = (): void => {
    setVisibleProductType(Goods.monitors);
    setVisibleGoods(getTheRightGoods(Goods.monitors, allGoods));
    setIsLoadingNewProducts(true);
  };

  const ref: any = useRef<HTMLElement>();
  const onScreen: boolean = useOnScreen<HTMLElement>(ref, '80px');

  return (
    <Container>
      <section
        className={cn(styles.section, styles.sectionPage)}
        data-testid="products-scroll-section"
        ref={ref}
      >
        {onScreen && (
          <>
            <ul className={styles.buttonsList} >
              <li className={styles.buttonsListItem}>
                <button
                  className={cn(styles.button, {[styles.buttonActive]: visibleProductType === Goods.laptops})}
                  data-testid="laptops-filter"
                  onClick={handleLaptopsVisibility}
                  type="submit"
                >
                  Laptops
                </button>
              </li>
              <li className={styles.buttonsListItem}>
                <button
                  className={cn(styles.button, {[styles.buttonActive]: visibleProductType === Goods.computers})}
                  data-testid="computers-filter"
                  onClick={handleComputersVisibility}
                  type="submit"
                >
                  Computers
                </button>
              </li>
              <li className={styles.buttonsListItem}>
                <button
                  className={cn(styles.button, {[styles.buttonActive]: visibleProductType === Goods.monitors})}
                  data-testid="monitors-filter"
                  onClick={handleMonitorsVisibility}
                  type="submit"
                >
                  Monitors
                </button>
              </li>
            </ul>
            <DynamicInfiniteScroll
              className={styles.loaderBlock}
              dataLength={visibleGoods.length}
              endMessage={<p className={styles.endOfSectionText} >You&apos;ve watched all products in this section</p>}
              hasMore={isLoadingNewProducts}
              loader={<Loader />}
              next={getMoreProducts}
              scrollThreshold={0.3}
              style={{overflow: 'hidden'}}
            >
              <div className={styles.block}>
                {visibleGoods.map((post: Product) => (
                  <ProductCard key={uuid_v4()} product={post}/>
                ))}
              </div>
            </DynamicInfiniteScroll>
          </>
        )}
      </section>
    </Container>
  )};

  export default ProductsScroll;
