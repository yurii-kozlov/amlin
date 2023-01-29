import React, { ReactElement } from 'react';
import { GetStaticPropsResult } from 'next';
import { Products } from 'types/main/Products';
import { instance } from 'api/api';
import { ProductsCatalog } from 'components/ProductsCatalog';

type DesktopPCsProps = {
  computers: Products
}

const Computers: React.FC<DesktopPCsProps> = ({ computers }): ReactElement => (
  <ProductsCatalog products={computers.list} />
  )

export default Computers;

type getStaticPropsReturnMain = {
  computers: Products
}

export async function getStaticProps():Promise<GetStaticPropsResult<getStaticPropsReturnMain>> {
      const res = await instance.get('/computers');
      const computers: Products = res.data;

  return {
    props: {computers},
  }
}
