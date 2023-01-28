import React, { ReactElement } from 'react';
import { Product } from 'types/main/Products';
import { ProductCard } from 'components/ProductCard';
import { uuid } from 'uuidv4';
import styles from 'styles/layout/Products/Products.module.scss';

type ProductsProps = {
  products: Product[]
}

export const Products: React.FC<ProductsProps> = ({ products }): ReactElement => (
  <div className={styles.block} >
    {products.map((product) => (
      <ProductCard key={uuid()} product={product} />
      ))}
  </div>
  );
