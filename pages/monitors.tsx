import React, { ReactElement } from 'react';
import { GetStaticPropsResult } from 'next';
import { Products } from 'types/main/Products';
import { instance } from 'api/api';
import { ProductsCatalog } from 'components/ProductsCatalog';

type LaptopsProps = {
  monitors: Products
}

const Monitors: React.FC<LaptopsProps> = ({ monitors }): ReactElement => (
  <ProductsCatalog products={monitors.list} />
  )

export default Monitors;

type getStaticPropsReturnMain = {
  monitors: Products
}

export async function getStaticProps():Promise<GetStaticPropsResult<getStaticPropsReturnMain>> {
      const res = await instance.get('/monitors');
      const monitors: Products = res.data;

  return {
    props: {monitors},
  }
}
