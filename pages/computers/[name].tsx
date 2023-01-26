import { MainContainer } from 'components/MainContainer';
import React, { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import { Products, Product } from 'types/main/Products';
import { useRouter } from 'next/router';
import { AboutProduct } from 'components/AboutProduct/AboutProduct';
import { GetServerSidePropsResult } from 'next';
import { Goods } from 'enums/goods';

type ComputerProps = {
  computers: Products
}

const Computer:React.FC<ComputerProps> = ({ computers }): ReactElement => {
  const [ currentComputer, setCurrentComputer ] = useState<Product | null>(null)
  const { query } = useRouter();
  const {list } = computers;

  useEffect(() => {
    const selectedComputer:Product | undefined = list.find((computer) =>
      computer.name === query.name || computer.name.includes(query.name as string)
    )
    setCurrentComputer(selectedComputer || null);
  }, [])

  return (
    <MainContainer>
      <AboutProduct product={currentComputer} productType={Goods.computers}/>
    </MainContainer>
  )
}

type getStaticPropsReturnComputers = {
  computers: Products
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<getStaticPropsReturnComputers>> {
  const response = await axios.get('http://localhost:3001/computers');
  const computers: Products = response.data;

  return {
    props: {computers},
  }
}

export default Computer;
