import React, { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSidePropsResult } from 'next';
import { instance } from 'api/api';
import { Products, Product } from 'types/main/Products';
import { Goods } from 'enums/goods';
import { MainContainer } from 'components/MainContainer';
import { AboutProduct } from 'components/AboutProduct/AboutProduct';

type ComputerProps = {
  computers: Products
}

const Computer:React.FC<ComputerProps> = ({ computers }): ReactElement => {
  const [ currentComputer, setCurrentComputer ] = useState<Product | null>(null)
  const { query } = useRouter();
  const { list } = computers;

  useEffect(() => {
    const selectedComputer:Product | undefined = list.find((computer) =>
      computer.name === query.name || computer.name.includes(query.name as string)
    )
    setCurrentComputer(selectedComputer || null);
  }, [])

  return (
    <MainContainer title={currentComputer?.name || 'Acbout Product'}>
      <AboutProduct product={currentComputer} productType={Goods.computers}/>
    </MainContainer>
  )
}

type getStaticPropsReturnComputers = {
  computers: Products
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<getStaticPropsReturnComputers>> {
  const response = await instance.get('/computers');
  const computers: Products = response.data;

  return {
    props: {computers},
  }
}

export default Computer;
