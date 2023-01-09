import { MainContainer } from 'components/MainContainer';
import React, { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import { Products, Product } from 'types/main/Products';
import { useRouter } from 'next/router';
import { AboutProduct } from 'components/AboutProduct/AboutProduct';
import { GetServerSidePropsResult } from 'next';
import { Goods } from 'enums/goods';

type LaptopProps = {
  laptops: Products
}

const Laptop:React.FC<LaptopProps> = ({ laptops }): ReactElement => {
  const [ currentLaptop, setCurrentLaptop ] = useState<Product | null>(null)
  const { query } = useRouter();
  const {list } = laptops;

  useEffect(() => {
    const selectedLaptop:Product | undefined = list.find((laptop) => laptop.name === query.name)
    setCurrentLaptop(selectedLaptop || null);
  }, [])

  return (
    <MainContainer>
      <AboutProduct product={currentLaptop} productType={Goods.laptops}/>
    </MainContainer>
  )
}

type getStaticPropsReturnLaptops = {
  laptops: Products
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<getStaticPropsReturnLaptops>> {
  const response = await axios.get('http://localhost:3001/laptops');
  const laptops: Products = response.data;

  return {
    props: {laptops},
  }
}

export default Laptop;
