import React, { ReactElement } from 'react';
import { v4 as uuid_v4 } from 'uuid';
import cn from 'classnames';
import { Product } from 'types/main/Products';
import { ProductViewType } from 'enums/productsViewType';
import { ProductCard } from 'components/ProductCard';
import { ProductListItem } from 'components/ProductListItem';
import styles from 'styles/layout/Products/Products.module.scss';

type ProductsProps = {
  products: Product[]
  productsViewType: ProductViewType
}

export const Products: React.FC<ProductsProps> = ({ products, productsViewType }): ReactElement => (
  <div className={cn(
    {[styles.block]: productsViewType === ProductViewType.catalog},
    {[styles.blockListView]: productsViewType === ProductViewType.list})} >
    {products.map((product) => productsViewType === ProductViewType.catalog
      ? <ProductCard key={uuid_v4()} product={product} />
      : <ProductListItem key={uuid_v4()} product={product} />)}
  </div>
  );
