import React, { ReactElement } from 'react';
import { GetStaticPropsResult } from 'next';
import { Products } from 'types/main/Products';
import { instance } from 'api/api';
import { ProductsCatalog } from 'components/ProductsCatalog';

type LaptopsProps = {
  laptops: Products
}

const Laptops: React.FC<LaptopsProps> = ({ laptops }): ReactElement => (
  <ProductsCatalog products={laptops.list} />
  )

export default Laptops;

type getStaticPropsReturnMain = {
  laptops: Products
}

export async function getStaticProps():Promise<GetStaticPropsResult<getStaticPropsReturnMain>> {
      const res = await instance.get('/laptops');
      const laptops: Products = res.data;

  return {
    props: {laptops},
  }
}
