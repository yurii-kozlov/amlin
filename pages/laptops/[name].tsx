import React, { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSidePropsResult } from 'next';
import { instance } from 'api/api';
import { Products, Product } from 'types/main/Products';
import { Goods } from 'enums/goods';
import { MainContainer } from 'components/MainContainer';
import { AboutProduct } from 'components/AboutProduct/AboutProduct';

type LaptopProps = {
  laptops: Products
}

const Laptop:React.FC<LaptopProps> = ({ laptops }): ReactElement => {
  const [ currentLaptop, setCurrentLaptop ] = useState<Product | null>(null)
  const { query } = useRouter();
  const { list } = laptops;

  useEffect(() => {
    const selectedLaptop:Product | undefined = list.find((laptop) =>
    laptop.name === query.name || laptop.name.includes(query.name as string));

    setCurrentLaptop(selectedLaptop || null);
  }, [])

  return (
    <MainContainer title='About Product'>
      <AboutProduct product={currentLaptop} productType={Goods.laptops}/>
    </MainContainer>
  )
}

type getStaticPropsReturnLaptops = {
  laptops: Products
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<getStaticPropsReturnLaptops>> {
  const response = await instance.get('/laptops');
  const laptops: Products = response.data;

  return {
    props: {laptops},
  }
}

export default Laptop;
