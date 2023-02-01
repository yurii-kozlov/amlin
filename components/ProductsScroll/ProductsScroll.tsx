import React, { ReactElement, useState } from 'react';
import cn from 'classnames';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AxiosResponse } from 'axios';
import { v4 as uuid_v4 } from 'uuid';
import { Product, Products } from 'types/main/Products';
import { Goods } from 'enums/goods';
import { instance } from 'api/api';
import { getTheRightGoods } from 'helpers/getTheRightGoods';
import { Container } from 'components/Container';
import { ProductCard } from 'components/ProductCard';
import { Loader } from 'components/Loader';
import styles from 'styles/layout/ProductsScroll.module.scss';

type ProductsScrollProps = {
  products: Product[]
}

export const ProductsScroll: React.FC<ProductsScrollProps> = ({ products }): ReactElement => {
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

  return (
    <Container>
      <section className={cn(styles.section, styles.sectionPage)} >
        <ul className={styles.buttonsList} >
          <li className={styles.buttonsListItem}>
            <button
              className={cn(styles.button, {[styles.buttonActive]: visibleProductType === Goods.laptops})}
              onClick={handleLaptopsVisibility}
              type="submit"
            >
              Laptops
            </button>
          </li>
          <li className={styles.buttonsListItem}>
            <button
              className={cn(styles.button, {[styles.buttonActive]: visibleProductType === Goods.computers})}
              onClick={handleComputersVisibility}
              type="submit"
            >
              Computers
            </button>
          </li>
          <li className={styles.buttonsListItem}>
            <button
              className={cn(styles.button, {[styles.buttonActive]: visibleProductType === Goods.monitors})}
              onClick={handleMonitorsVisibility}
              type="submit"
            >
              Monitors
            </button>
          </li>
        </ul>
        <InfiniteScroll
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
        </InfiniteScroll>
      </section>
    </Container>
  )};

